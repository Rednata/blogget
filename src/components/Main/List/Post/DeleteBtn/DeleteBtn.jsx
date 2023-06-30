import style from './DeleteBtn.module.css';
import {InlineSvg} from '../../../../../UI/Svg/Svg';

// import {ReactComponent as DeleteIcon} from './img/delete.svg';

export const DeleteBtn = () => (
  <button className={style.delete}>
    {/* <DeleteIcon /> */}
    <InlineSvg
      nAme='deleteIcon'
      width={24}
      height={24}
    />
  </button>
);
