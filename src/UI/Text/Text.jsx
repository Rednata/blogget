import classNames from 'classnames';
import style from './Text.module.css';
import PropTypes from 'prop-types';

export const Text = prop => {
  // console.log(prop);
  const {
    As = 'span',
    color = 'black',
    size,
    tsize,
    dsize,
    className,
    children,
    href,
    center,
    fweight,
  } = prop;
  // console.warn(`fs${size}`);
  // console.log({[style[`fs${size}`]]: size});
  // {[style[`fs${size}`]]: size},
  const classes = classNames(
      className,
      style[color],
      center,
      {[style[`${fweight}`]]: fweight},
      {[style.center]: center},
      style[`fs${size}`],
      {[style[`fst${tsize}`]]: tsize},
      {[style[`fsd${dsize}`]]: dsize},
  );
  // console.log(classes);
  return (
    <As className={classes} href={href}>{children}</As>
  );
};

Text.propTypes = {
  As: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  tsize: PropTypes.number,
  dsize: PropTypes.number,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
    PropTypes.number,
  ]),
  href: PropTypes.string,
  center: PropTypes.bool,
  fweight: PropTypes.string,
};
