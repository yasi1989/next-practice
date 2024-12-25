"use server";
import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { z } from "zod";

export async function addPostAction(formData: FormData) {
  try {
    const { userId } = auth();
    if (!userId) {
      return;
    }
    const postText = formData.get("post") as string;
    const postTextSchema = z
      .string()
      .min(1, "ポスト内容を入力してください。")
      .max(140, "140字以内で入力してください。");
    const validatedPostText = postTextSchema.parse(postText);
    await prisma.post.create({
      data: {
        content: validatedPostText,
        authorId: userId,
      },
    });
    return {
      error: undefined,
      success: true,
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        error: error.errors.map((e) => e.message).join(","),
        success: false,
      };
    } else if (error instanceof Error) {
      return {
        error: error.message,
        success: false,
      };
    } else {
      return {
        error: "予期せぬエラーが発生しました。",
        success: false,
      };
    }
  }
}
