type ContactEmailProps = {
  name: string;
  email: string;
  message: string;
};

export function ContactEmail({ name, email, message }: ContactEmailProps) {
  return (
    <div>
      <h1>
        {name} - {email}
      </h1>
      <p>{message}</p>
    </div>
  );
}
