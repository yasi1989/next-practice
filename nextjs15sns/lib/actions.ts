"use server";
import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { z } from "zod";

type State = {
  error?: string | undefined;
  success: boolean;
};

export async function addPostAction(
  prevState: State,
  formData: FormData
): Promise<State> {
  try {
    const { userId } = auth();
    if (!userId) {
      return {
        error: "ユーザが存在しません",
        success: false,
      };
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

    revalidatePath("/");

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

export async function likeAction(postId: string) {
  const { userId } = auth();

  if (!userId) {
    throw new Error("User is not authonicated");
  }

  try {
    const existingLike = await prisma.like.findFirst({
      where: {
        postId: postId,
        userId: userId,
      },
    });

    if (existingLike) {
      await prisma.like.delete({
        where: {
          id: existingLike.id,
        },
      });
    } else {
      await prisma.like.create({
        data: {
          postId,
          userId,
        },
      });
    }
    revalidatePath("/");
  } catch (error) {
    console.error(error);
  }
}

export async function followAction(userId: string) {
  const { userId: currentUserId } = auth();

  if (!currentUserId) {
    throw new Error("User is not authonicated");
  }

  try {
    const existingFollow = await prisma.follow.findFirst({
      where: {
        followerId: currentUserId,
        followingId: userId,
      },
    });

    if (existingFollow) {
      await prisma.follow.delete({
        where: {
          followerId_followingId: {
            followerId: currentUserId,
            followingId: userId,
          },
        },
      });
    } else {
      await prisma.follow.create({
        data: {
          followerId: currentUserId,
          followingId: userId,
        },
      });
    }
    revalidatePath(`profile/${userId}`);
  } catch (error) {
    console.error(error);
  }
}
