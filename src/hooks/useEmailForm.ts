import { InferType, object, string } from 'yup';
import { useForm } from '@platypusrex/react-use-form';
import { UseToastOptions, useToast } from '@chakra-ui/react';
import { useState } from 'react';

const NAME_REQUIRED = 'Name is required. How will I know what to call you?';
const EMAIL_REQUIRED = 'Email is required. How will I know how to reach you?';
const EMAIL_VALID = 'Email must be valid.';
const MESSAGE_REQUIRED = 'Message is required. What will we talk about?';

const toastProps: UseToastOptions = {
  duration: 10000,
  isClosable: true,
  position: 'top-right',
};

const schema = object({
  name: string().required(NAME_REQUIRED),
  email: string().required(EMAIL_REQUIRED).email(EMAIL_VALID),
  message: string().required(MESSAGE_REQUIRED),
});

export type EmailFormValues = InferType<typeof schema>;

const initialValues: EmailFormValues = {
  name: '',
  email: '',
  message: '',
};

export const useEmailForm = () => {
  const toast = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { onSubmit, reset, ...rest } = useForm<EmailFormValues>({
    initialValues,
    validation: {
      schema,
      debounce: { in: 1000, out: 0 },
    },
  });

  const handleSubmit = onSubmit(async (values: EmailFormValues) => {
    try {
      setIsSubmitting(true);
      await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      setIsSubmitting(false);
      reset();
      toast({
        ...toastProps,
        title: 'Message sent!',
        description: `I'll get back with you as soon as I can!`,
        status: 'success',
      });
    } catch (e) {
      setIsSubmitting(false);
      toast({
        ...toastProps,
        title: 'Error!',
        description: `Looks like something went wrong.`,
        status: 'success',
      });
    }
  });

  return { ...rest, isSubmitting, handleSubmit };
};
