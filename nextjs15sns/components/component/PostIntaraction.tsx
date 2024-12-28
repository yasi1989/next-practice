"use client";
import React, { useOptimistic } from "react";
import { Button } from "@/components/ui/button";
import { HeartIcon, MessageCircleIcon, Share2Icon } from "./Icons";
import { likeAction } from "@/lib/actions";
import { useAuth } from "@clerk/nextjs";

type LikeState = {
  likeCount: number;
  isLiked: boolean;
};

type PostIntaractionProps = {
  postId: string;
  initialLikes: string[];
  commentNumber: number;
};

const PostIntaraction = ({
  postId,
  initialLikes,
  commentNumber,
}: PostIntaractionProps) => {
  const { userId } = useAuth();
  const initialState = {
    likeCount: initialLikes.length,
    isLiked: userId ? initialLikes.includes(userId) : false,
  };
  const [optimisticLike, addOprimisticLike] = useOptimistic<LikeState, void>(
    initialState,
    (currentState) => ({
      likeCount: currentState.isLiked
        ? currentState.likeCount - 1
        : currentState.likeCount + 1,
      isLiked: !currentState.isLiked,
    })
  );
  const handleLikeSubmit = async () => {
    try {
      addOprimisticLike();
      await likeAction(postId);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="flex items-center">
      <form action={handleLikeSubmit}>
        <Button variant="ghost" size="icon">
          <HeartIcon
            className={`h-5 w-5 ${
              optimisticLike.isLiked
                ? "text-destructive"
                : "text-muted-foreground"
            }`}
          />
        </Button>
      </form>
      <span className={`-ml-1 ${optimisticLike.isLiked && "text-destructive"}`}>
        {optimisticLike.likeCount}
      </span>
      <Button variant="ghost" size="icon">
        <MessageCircleIcon className="h-5 w-5 text-muted-foreground" />
      </Button>
      <span className="-ml-1">{commentNumber}</span>
      <Button variant="ghost" size="icon">
        <Share2Icon className="h-5 w-5 text-muted-foreground" />
      </Button>
    </div>
  );
};

export default PostIntaraction;
