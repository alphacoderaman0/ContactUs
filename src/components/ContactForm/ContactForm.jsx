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
          <form>
            <div className={styles.formController}>
            <label htmlFor="name">Name</label>
            <input type="text" name='name' />
            </div>
            <div className={styles.formController}>
            <label htmlFor="email">E-Mail</label>
            <input type="text" name='email' />
            </div>
            <div className={styles.formController}>
            <label htmlFor="text">Text</label>
            <textarea rows="7" type="text" name='text' />
            </div>
            <div style={{display:'flex',justifyContent:'end',marginRight:'2.5%'}}>
            <Button text="SUBMIT"/>
            </div>
          </form>
        </div>
        <div className={styles.contactImage}>
          <img src="" alt="ContactImage" />
        </div>
    </section>
  )
}

export default ContactForm;
