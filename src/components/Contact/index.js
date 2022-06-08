import React from "react";

function ContactForm() {
  // JSX
  return (
    <section>
      <h1>contact me</h1>
      <form id="contact-form">
        <div>
          <label htmlFor="name">name:</label>
          <input type="text" name="name"/>
        </div>
        <div>
          <label htmlFor="email">email address:</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label htmlFor="message">message:</label>
          <textarea name="message" rows="5" />
        </div>
        <button type="submit">submit</button>
      </form>
    </section>
  )
}

export default ContactForm;