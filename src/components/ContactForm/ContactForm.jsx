import React from 'react'
import styles from './ContactForm.module.css'
import Button from '../Button/Button';
import { MdOutlineMessage } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
const ContactForm = () => {
  return (
    <section className={styles.container}>
        <div className={styles.form}>
          <div className={styles.topBtn}>
          <Button text="VIA SUPPORT CHAT"  icon={<MdOutlineMessage />}/>
          <Button text="VIA CALL"  icon={<IoIosCall />}/>
          </div>
          <Button isOutline={true} text="VIA EMAIL FORM"  icon={<MdOutlineMessage />}/>

        
        </div>
        <div className={styles.contactImage}></div>
    </section>
  )
}

export default ContactForm;
