import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", 
        "0a775098-7f53-43da-a98f-0d03da8eac95");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    }
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p>Feel free to reach out throught contact form or
                find our contact details below. Your feedback, questions,
                and inquiries are important to us, and we look forward to connecting with you.

            </p>
            <ul>
                <li><img src={mail_icon} alt="" />Contact@thanhkakho2006.com</li>
                <li><img src={phone_icon} alt="" />+84 91122324</li>
                <li><img src={location_icon} alt="" />D12/9 Vong Lam Vien P9 Thanh pho Da lat</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your name</label>
                <input type="text" name='name' placeholder='Enter your name' required />
                <label>Phone number</label>
                <input type="tel" name='phone' placeholder='Enter your phone number' required />
                <label>Write your message here</label>
                <textarea name="message" id=""  rows="6" placeholder='Enter your message' required>

                </textarea>
                <button type='submit' className='btn dark-btn'>
                    Submit now <img src={white_arrow} alt="" />
                </button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact