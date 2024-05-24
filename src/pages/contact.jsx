import { useState } from "react";
import "../styles/contact.css";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "2cc869cb-a5d4-4b4b-b609-7d0a0bd4ea78");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Email Successfully Sent");
      event.target.reset(); //reset your form fields
    } else {
      console.log("Error sending email", data);
      setResult(data.message);
    }
  };

  return (
    <div id="contact-form">
      <form onSubmit={onSubmit}>
        <p>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" required />
        </p>

        <p>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" required />
        </p>

        <p>
          <label htmlFor="message">Message:</label>
          <textarea name="message" id="message" required></textarea>
        </p>

        <p>
          <button type="submit">Submit Form</button>
        </p>
      </form>
      <span>{result}</span>
    </div>
  );
};

export default Contact;
