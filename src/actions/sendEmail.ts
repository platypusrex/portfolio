'use server';
import { Resend } from 'resend';
import { z, ZodError } from 'zod';
import { ContactEmail } from 'modules/contact/ContactEmail';

const NAME_REQUIRED = 'Name is required. How will I know what to call you?';
const EMAIL_REQUIRED = 'Email is required. How will I know how to reach you?';
const EMAIL_VALID = 'Email must be valid.';
const MESSAGE_REQUIRED = 'Message is required. What will we talk about?';

const schema = z.object({
  name: z.string().min(1, NAME_REQUIRED),
  email: z.string().min(1, EMAIL_REQUIRED).email({ message: EMAIL_VALID }),
  message: z.string().min(1, MESSAGE_REQUIRED),
});

const parseErrorSchema = <TValues>(zodErrors: z.ZodIssue[]) => {
  const errors = {} as Record<keyof TValues, string>;
  for (let i = 0; i < zodErrors.length; i++) {
    const error = zodErrors[i];
    const { message, path } = error;
    const fieldName = path[0];

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    if (!errors[fieldName]) {
      errors[fieldName as keyof TValues] = message;
    }
  }
  return errors;
};

type SendEmailState = {
  data: { id: string } | null;
  error?: {
    attempts: number;
    message: string;
    name: string;
  };
  fieldErrors?: {
    name?: string;
    email?: string;
    message?: string;
  };
};

export const sendEmail = async (
  state: SendEmailState,
  formData: FormData
): Promise<SendEmailState> => {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  let fieldErrors;
  try {
    schema.parse({ name, email, message });
  } catch (e) {
    if (e instanceof ZodError) {
      fieldErrors = e.isEmpty ? {} : parseErrorSchema(e.errors);
    }
  }

  if (!!fieldErrors) {
    return {
      data: null,
      fieldErrors,
    };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const { data, error } = await resend.emails.send({
    from: 'p_rex portfolio <contact@resend.dev>',
    to: ['delivered@resend.dev'],
    subject: `Contact request - ${name}`,
    react: ContactEmail({ name, email, message }),
  });

  if (error) {
    return {
      data: null,
      error: {
        attempts: state?.error?.attempts ? state.error.attempts + 1 : 1,
        ...error,
      },
    };
  }

  return { data };
};
