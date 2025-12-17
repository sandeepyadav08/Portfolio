import { Container } from './styles';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import validator from 'validator';

export function Form() {
  const [validEmail, setValidEmail] = useState(false);
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  function verifyEmail(email: string) {
    setValidEmail(validator.isEmail(email));
  }
  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsSubmitting(true);
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
        message: message,
        access_key: '9f41289a-c462-413f-a1e3-6532c0c65141', // Replace with your Web3Forms email key
      }),
    });

    const data = await response.json();

    if (data.success) {
      toast.success('Thanks for getting in touch! Email successfully sent!', {
        position: toast.POSITION.BOTTOM_RIGHT,
        pauseOnFocusLoss: false,
        closeOnClick: true,
        hideProgressBar: false,
        toastId: 'succeeded',
      });
      setName('');
      setEmail('');
      setMessage('');
      setValidEmail(false);
    } else {
      toast.error('Failed to send email. Please try again.', {
        position: toast.POSITION.BOTTOM_LEFT,
        pauseOnFocusLoss: false,
        closeOnClick: true,
        hideProgressBar: false,
      });
    }

    setIsSubmitting(false);
  };

  return (
    <Container>
      <h2>Get in touch using the form</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter your full name"
          id="name"
          type="text"
          name="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          required
        />
        <input
          placeholder="Enter your email address"
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            verifyEmail(e.target.value);
          }}
          required
        />
        <textarea
          required
          placeholder="Send a message to get started."
          id="message"
          name="message"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <button
          type="submit"
          disabled={isSubmitting || !validEmail || !message || !name}
        >
          Submit
        </button>
      </form>
      <ToastContainer />
    </Container>
  );
}
