import { useState } from 'react';
import styles from './ContactForm.module.css'
import Button from '../Button/Button';
import { MdOutlineMessage } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
const ContactForm = () => {

  const onViaSupport = () =>{
    console.log("I am From Via Support")
  }
  const onViaCall = () =>{
    console.log("I am From Via Call")
  }
  const onViaEmail = () =>{
    console.log("I am From Via Email")
  }

  const[name, setName] = useState('xyz');  
  const[email, setEmail] = useState('xyz@gmail.com'); 
  const[message, setMessage] = useState('message');  

  // let name = "xyz";
  // let email = "xyz@gmail.com";
  // let message = "message";
  const onSubmit = (event) =>{
    event.preventDefault();

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setMessage(event.target[2].value);

  }

  return (
    <section className={styles.container}>
        <div className={styles.form}>
          <div className={styles.topBtn}>
          <Button onclick={onViaSupport} text="VIA SUPPORT CHAT"  icon={<MdOutlineMessage />}/>
          <Button onclick={onViaCall} text="VIA CALL"  icon={<IoIosCall />}/>
          </div>
          <Button onclick={onViaEmail} isOutline={true} text="VIA EMAIL FORM"  icon={<MdOutlineMessage />}/>
          <form onSubmit={onSubmit}>
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
            <div>
              <table>
                <tr>
                  <td>Your name is</td>
                  <td>{name}</td>
                </tr>
                <tr>
                  <td>your email is</td>
                  <td>{email}</td>
                </tr>
                <tr>
                  <td>your message is</td>
                  <td>{message}</td>
                </tr>
              </table>
            </div>
          </form>
        </div>
        <div className={styles.contactImage}>
          <img src="/images/contact.svg" alt="ContactImage" style={{maxWidth:'500px', height:'515px', marginTop:'-20'}}/>
        </div>
    </section>
  )
}

export default ContactForm;
