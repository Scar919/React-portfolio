import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'email') {
      const isValid = validateEmail(value);
      setErrorMessage(isValid ? '' : 'Your email is invalid.');
    } else {
      setErrorMessage(value ? '' : `${name} is required.`);
    }

    setFormState({ ...formState, [name]: value });
  };

  const { name, email, message } = formState;

  return (
    <section>
      <h1 data-testid="h1tag">Contact Me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            rows="8"
            value={message}
            onChange={handleChange}
          />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button data-testid="button" type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;