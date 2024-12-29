import { z } from "zod";

const MAX_MB = 5;
const MAX_FILE_SIZE = MAX_MB * 1024 * 1024;
const ACCEPTED_IMAGE_TYPE = [
  "image/jped",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const formSchema = z.object({
  username: z
    .string()
    .min(2, { message: "ユーザ名は2文字以上で入力してください。" }),
  subject: z
    .string()
    .min(2, { message: "主題は2文字以上で入力してください。" }),
  email: z
    .string()
    .email({ message: "適切なメールアドレスを入力してください。" }),
  content: z
    .string()
    .min(10, { message: "本文は10文字以上で入力してください。" })
    .max(160, { message: "本文は160文字以内で入力してください。" }),
  files: z
    .custom<FileList>()
    .optional()
    .refine(
      (files) => !files || files[0].size <= MAX_FILE_SIZE,
      `画像サイズは${MAX_MB}MBです。`
    )
    .refine(
      (files) => !files || ACCEPTED_IMAGE_TYPE.includes(files?.[0]?.type),
      ".jpg, .jpeg, .png, .webpのファイルのみ利用できます。"
    ),
});
