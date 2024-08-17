'use client';
import { useFormState } from 'react-dom';
import { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { TextField } from 'components/TextField';
import { TextArea } from 'components/TextArea';
import { Button } from 'components/Button';
import { sendEmail } from 'actions/sendEmail';

const initialState = {
  data: null,
  errors: {
    name: '',
    email: '',
    message: '',
  },
};

export function ContactForm() {
  const [state, formAction] = useFormState(sendEmail, initialState);

  const notify = () => toast(`Email sent. I'll be in touch!`);
  const error = () => toast.error('Something went wrong :(');

  // All of this bothers me deeply - there has to be a better way :(
  useEffect(() => {
    if (state.data?.id) notify();
  }, [state.data?.id]);

  useEffect(() => {
    if (state.error?.attempts) error();
  }, [state.error?.message, state.error?.attempts]);

  return (
    <>
      <form name="contact-form" key={state.data?.id} className="grid gap-4" action={formAction}>
        <TextField
          id="name"
          name="name"
          label="Your name"
          error={state.fieldErrors?.name}
          required
        />
        <TextField
          id="email"
          name="email"
          label="Your email"
          error={state.fieldErrors?.email}
          required
        />
        <TextArea
          id="message"
          name="message"
          label="Your message"
          error={state.fieldErrors?.message}
          required
        />
        <Button loadingText="Submitting">Send email</Button>
      </form>
      <ToastContainer limit={8} />
    </>
  );
}
