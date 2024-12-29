import { sendMail } from "@/lib/actions";
import { formSchema } from "@/lib/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const useMailForm = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      subject: "",
      email: "",
      content: "",
      files: undefined,
    },
  });

  const onSubmit = useCallback(async (values: z.infer<typeof formSchema>) => {
    await sendMail(values);
  }, []);

  return { form, onSubmit };
};
