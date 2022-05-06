import React, { useState } from "react";

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formState;

  function handleChange(e) {
    setFormState({ ...formState, name: e.target.value });
  }
  console.log(formState);

  // JSX
  return (
    <section>
      <h1>Contact Me</h1>
      <form id="contact-form">
        <div>
          <label htmlFor="name">name</label>
          <input
            type="text"
            name="name"
            defaultValue={name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">email address</label>
          <input type="email" name="email" defaultValue={email} />
        </div>
        <div>
          <label htmlFor="message">message</label>
          <input type="message" rows="5" defaultValue={message} />
        </div>
        <button type="submit">submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
