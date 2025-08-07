import './Contact.css';
import waveImage from '../assets/wave.png';
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import emailjs from "@emailjs/browser";
import { MdEmail } from "react-icons/md";
import React,{useRef} from 'react';

function Contact() {

    const form = useRef();

    const sendEmail =(e)=>{
    e.preventDefault();

    emailjs.sendForm("service_qtu92la", "template_a8e26up",form.current, "3ehNKHgQ_Wg1qvWfo")
    .then(()=>{alert("Message sent successfully!");
     form.current.reset();
    },(error)=>{
        alert("Failed to sent message, please try again",error);
    }  );
    
    }

    return (
        <div className='ContactContainer'>
            <div className="grid-container">
                <div className="grid-background" />
                <div className="grid-mask" />
                <div className='contactSecondContainer' >
                    <div className='GetInTouchContainer' >
                        <h1 className='FirstHeading' >Get in touch.</h1>
                        <p>Have a project in mind or just want to say hello? I'd love to hear from you.</p>
                        <p>Let's create somthing amazing together!</p>
                        <div className='ContactFormContainer'>
                            <dix className='headingsLine' >
                                <p className='line'></p>
                                <h1>Say Hello </h1>
                                <img src={waveImage} />
                            </dix>

                            <p className='paraTag' >Feel free to reach out via the form below</p>
                            <form ref={form} onSubmit={sendEmail} >
                            <div>
                                <input placeholder='Your name' type='text' name='name' required />
                                <input placeholder='Your email address' type='email' name='user_email' required />
                            </div>
                            <textarea placeholder='What i can help you with?' name='message' required  ></textarea>
                            <button type='submit'><IoIosSend />Send Message</button>
                            </form>
                        </div>
                    
                    </div>

                    <div className='ContactInfoContainer'>
                        <div className='ContactInfoHeading'>
                            <p className='headingLine' ></p>
                            <h1>Let's connect</h1>
                        </div>

                        <p className='belowheadingPara' >You can also find me on</p>

                        <div className='SocialIconsContainer'>
                            <div className='githubIcon'>
                                <IoLogoGithub className='icons' />
                            </div>
                            <div>
                                <FaLinkedin className='icons' />
                            </div>
                            <div>
                                <FaFacebook className='icons' />
                            </div>
                            <div>
                                <FaXTwitter className='icons' />
                            </div>
                            <div>
                                <FaTelegram className='icons' />
                            </div>

                        </div>
                        <p className='emailPara' >Or reach me directly at:</p>
                        <div className='emailDetailesContainer' >
                            <MdEmail className='emailIcon' />
                            <p>dasarisurendra0604@gmail.com</p>
                        </div>

                    </div>


                </div>
            </div>

        </div>
    )

}
export default Contact;