import style from './Tabs.module.css';
import PropTypes from 'prop-types';
import {useEffect, useState} from 'react';
import {assignID} from '../../../utils/generateRandomID';
import {debounceRaf} from '../../../utils/debounce';

import {ReactComponent as ArrowIcon} from './img/arrow.svg';
import {ReactComponent as HomeIcon} from './img/home.svg';
import {ReactComponent as TopIcon} from './img/top.svg';
import {ReactComponent as BestIcon} from './img/best.svg';
import {ReactComponent as HotIcon} from './img/hot.svg';

const LIST = [
  {value: 'Главная', Icon: HomeIcon},
  {value: 'Топ', Icon: TopIcon},
  {value: 'Лучшие', Icon: BestIcon},
  {value: 'Горячие', Icon: HotIcon},
].map(assignID);

export const Tabs = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [titleBtnMenu, setTitleBtnMenu] = useState('Show');
  const [isDropDown, setIsDropDown] = useState(false);

  const onClickTabsBtn = (value) => {
    setTitleBtnMenu(value);
    // setTitleBtnMenu(e.target.textContent);
  };

  const handleResize = () => {
    if (document.documentElement.clientWidth < 768) {
      console.log('<768');
      setIsDropDown(true);
    } else {
      console.log('>=768');
      setIsDropDown(false);
    }
  };

  useEffect(() => {
    const debounceResize = debounceRaf(handleResize);
    debounceResize();
    window.addEventListener('resize', debounceResize);
    return () => {
      window.removeEventListener('resize', debounceResize);
    };
  });

  return (
    <div className={style.container}>
      {isDropDown &&
        <div className={style.wrapperBtn}>
          <button className={style.btn} onClick={() =>
            setIsDropdownOpen(!isDropdownOpen)}>{titleBtnMenu}
            <ArrowIcon width={15} height={15}/>
          </button>
        </div>
      }
      {
        (isDropdownOpen || !isDropDown) &&
          <ul className={style.list} onClick={() =>
            setIsDropdownOpen(false)}>
            {
              LIST.map(({value, id, Icon}) =>
                (<li className={style.item} key={id}>
                  <button
                    className={style.btn}
                    onClick={() => onClickTabsBtn(value)}>{value}
                    {Icon && <Icon width={30} height={30} />}
                  </button>
                </li>))
            }
          </ul>
      }
    </div>
  );
};

Tabs.propTypes = {
  list: PropTypes.array,
  setList: PropTypes.func,
};
