import React from 'react';
import style from './Heading.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../UI/Text';

export const Heading = props => (
  <Text As='h1'
    className={style.heading}
    size={22}
    dsize={26}
    center
  >{props.text}</Text>
);

Heading.propTypes = {
  text: PropTypes.string,
};
