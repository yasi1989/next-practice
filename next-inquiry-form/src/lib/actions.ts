"use server";

import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";
import { formSchema } from "./formSchema";
import { z } from "zod";

interface EmailOptions {
  from: string;
  to: string[];
  subject: string;
  react: React.ReactElement;
  attachments?: {
    filename: string;
    content: Buffer;
  }[];
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendMail(values: z.infer<typeof formSchema>) {
  const { username, email, content, files } = values;

  const emailOptions: EmailOptions = {
    from: "Acme <onboarding@resend.dev>",
    to: [process.env.MY_MAIL_ADDRESS!],
    subject: "フォーム開発相談",
    react: EmailTemplate({
      username: username,
      email: email,
      content: content,
    }),
  };

  if (files && files.length > 0) {
    const file = files[0];
    const buffer = Buffer.from(await file.arrayBuffer());
    emailOptions.attachments = [
      {
        filename: file.name,
        content: buffer,
      },
    ];
  }

  const { error } = await resend.emails.send(emailOptions);
  if (error) {
    throw new Error(error.message);
  }
}
