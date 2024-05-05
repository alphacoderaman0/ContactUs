import React from 'react'
import { MdOutlineMessage } from "react-icons/md";
import styles from './Button.module.css';
import PropTypes from 'prop-types';
const Button = (props) => {
    const {isOutline,icon,text} = props
  return (

    <button className={isOutline ? styles.outlineBtn :styles.primaryBtn}>{icon}{text}</button>
    
  )
}

export default Button
