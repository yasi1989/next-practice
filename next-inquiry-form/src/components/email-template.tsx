type EmailTemplateProps = {
  username: string;
  email: string;
  content: string;
};

export const EmailTemplate = ({
  username,
  email,
  content,
}: Readonly<EmailTemplateProps>) => {
  return (
    <div>
      <h1>こんにちわ、{username}です。</h1>
      <p>{email}から届きました。</p>
      <p>{content}</p>
    </div>
  );
};
