import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Sidebar from '../Sidebar';
import './index.scss'


const Contact = () => {
    
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dhzov9a', 'template_lx783t8', form.current, 'BH1p0pr5RpsHiWLBq')
      .then((result) => {
          console.log(result.text);
          console.log("message sent")
      }, (error) => {
          console.log(error.text);
      });
  };
  
  return (
    <>
        <Sidebar/>
        <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
        </form>
    </>
  );
};

export default Contact;