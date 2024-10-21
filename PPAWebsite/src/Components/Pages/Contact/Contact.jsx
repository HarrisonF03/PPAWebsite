import React from 'react'
import './Contact.css'

const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "556d6798-8a74-4a33-ab03-2bb8cdbc1786");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact' id='contact'>
      <div className="contact-col">
        <h3>Send me a message</h3>
        <p>Feel free to reach out through this contact form or find my contact info below.</p>
        <ul>
            <li>1234567890</li>
            <li>email@email.com</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text" name='name' placeholder='Enter your name' required />
            <label>Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter your phone number' required />
            <label>Write your message here</label>
            <textarea name="message" rows="6" placeholder='Enter your message' required ></textarea>
            <button type='submit' className='btn'>Submit</button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
