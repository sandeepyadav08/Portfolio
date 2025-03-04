import { Container, ContainerSucces } from './styles';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import validator from 'validator';

export function Form() {
  const [validEmail, setValidEmail] = useState(false);
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
        email: email,
        message: message,
        access_key: '9f41289a-c462-413f-a1e3-6532c0c65141', // Replace with your Web3Forms email key
      }),
    });

    const data = await response.json();

    if (data.success) {
      toast.success('Email successfully sent!', {
        position: toast.POSITION.BOTTOM_LEFT,
        pauseOnFocusLoss: false,
        closeOnClick: true,
        hideProgressBar: false,
        toastId: 'succeeded',
      });
      setIsSubmitted(true);
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

  if (isSubmitted) {
    return (
      <ContainerSucces>
        <h3>Thanks for getting in touch!</h3>
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          Back to the top
        </button>
        <ToastContainer />
      </ContainerSucces>
    );
  }

  return (
    <Container>
      <h2>Get in touch using the form</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Email"
          id="email"
          type="email"
          name="email"
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
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <button
          type="submit"
          disabled={isSubmitting || !validEmail || !message}
        >
          Submit
        </button>
      </form>
      <ToastContainer />
    </Container>
  );
}
