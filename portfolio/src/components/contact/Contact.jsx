import "./contact.css"
import Phone from '../../img/phone.png'
import Email from '../../img/email.png'
import Address from '../../img/address.png'
import { useRef, useState } from "react"
import emailjs from '@emailjs/browser';
import { use, useContext } from "react"
import { ThemeContext } from "../../context"

function Contact() {
    const formRef= useRef()
    const [done, setDone]= useState(false);
    const theme = useContext(ThemeContext)
     const darkMode= theme.state.darkMode;

    const handleSubmit=(e)=>{
        e.preventDefault();
            emailjs
            .sendForm('service_slwow8c', 'template_607jbl3', formRef.current, {
                publicKey: '_Kr0Vh4AO3wPdMpbJ',
              })
              .then(
                () => {
                  console.log('SUCCESS!');
                  setDone(true);
                },
                (error) => {
                  console.log('FAILED...', error.text);
                },
              );
        }
     
  return (
    <div className='c'>
        <div className="c-bg"></div>
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className="c-title">
                    Let's discuss your project
                </h1>
                <div className="c-info">
                    <div className="c-info-item">
                        <img src={Phone} alt="" className="c-icon" />
                        +9026153904
                    </div>
                    <div className="c-info-item">
                        <img src={Email} alt="" className="c-icon" />
                        contact@gmail.com
                    </div>
                    <div className="c-info-item">
                        <img src={Address} alt="" className="c-icon" />
                        Jain Global Campus, Kanakapura 562112 India
                    </div>
                </div>
            </div>
            <div className="c-right">
                <p className="c-desc">
                    <b>What's your story?</b> Get in touch. Always freelancing if the right project comes along.
                </p>

                <form action="" ref={formRef} onSubmit={handleSubmit}>
                    <input style={{backgroundColor:darkMode && "#333", color: darkMode && "white"}} type="text" placeholder="Name" name="user_name"/>
                    <input style={{backgroundColor:darkMode && "#333" ,color: darkMode && "white"}} type="text" placeholder="Subject" name="user_subject"/>
                    <input style={{backgroundColor:darkMode && "#333",  color: darkMode && "white"}} type="text" placeholder="Email" name="user_email"/>
                    <textarea style={{backgroundColor:darkMode && "#333", color: darkMode && "white"}} rows='5' placeholder="Message" name="message"></textarea>
                    <button className="btn">Submit</button>
                    {done && "Thank You..."}
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact
