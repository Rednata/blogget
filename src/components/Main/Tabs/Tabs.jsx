import style from './Tabs.module.css';
import PropTypes from 'prop-types';
import {useEffect, useState} from 'react';
import {assignID} from '../../../utils/generateRandomID';
import {debounceRaf} from '../../../utils/debounce';
import {Text} from '../../../UI/Text';
import {useNavigate} from 'react-router-dom';

import {ReactComponent as ArrowIcon} from './img/arrow.svg';
import {ReactComponent as HomeIcon} from './img/home.svg';
import {ReactComponent as TopIcon} from './img/top.svg';
import {ReactComponent as BestIcon} from './img/best.svg';
import {ReactComponent as HotIcon} from './img/hot.svg';

const LIST = [
  {value: 'Главная', Icon: HomeIcon, link: 'rising'},
  {value: 'Топ', Icon: TopIcon, link: 'top'},
  {value: 'Лучшие', Icon: BestIcon, link: 'best'},
  {value: 'Горячие', Icon: HotIcon, link: 'hot'},
].map(assignID);

export const Tabs = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [itemMenu, setItemMenu] = useState('Главная');
  const [isDropDown, setIsDropDown] = useState(false);

  const navigate = useNavigate();

  const handleResize = () => {
    if (document.documentElement.clientWidth < 768) {
      // console.log('<768');
      setIsDropDown(true);
    } else {
      // console.log('>=768');
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
            setIsDropdownOpen(!isDropdownOpen)}>{itemMenu}
            <ArrowIcon width={15} height={15}/>
          </button>
        </div>
      }
      {
        (isDropdownOpen || !isDropDown) &&
          <ul className={style.list} onClick={() =>
            setIsDropdownOpen(false)}>
            {
              LIST.map(({value, id, Icon, link}) =>
                (<Text As='li' className={style.item} key={id}>
                  <button
                    className={style.btn}
                    onClick={() => {
                      setItemMenu(value);
                      navigate(`/category/${link}`);
                    }}>{value}
                    {Icon && <Icon width={30} height={30} />}
                  </button>
                </Text>))
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
