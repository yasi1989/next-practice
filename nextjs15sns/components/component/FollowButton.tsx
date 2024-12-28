"use client";
import { useOptimistic } from "react";
import { Button } from "../ui/button";
import { followAction } from "@/lib/actions";
import { currentUser } from "@clerk/nextjs/server";

type FollowButtonProps = {
  isCurrentUser: boolean;
  isFollowing: boolean;
  userId: string;
};

const FollowButton = ({
  isCurrentUser,
  isFollowing,
  userId,
}: FollowButtonProps) => {
  const [optimisticFollow, addOptimisticFollow] = useOptimistic<
    { isFollowing: boolean },
    void
  >(
    {
      isFollowing,
    },
    (currentState) => ({
      isFollowing: !currentState.isFollowing,
    })
  );

  const getButtonContent = () => {
    if (isCurrentUser) {
      return "プロフィール編集";
    }

    if (optimisticFollow.isFollowing) {
      return "フォロー中";
    }

    return "フォローする";
  };

  const getButtonVariant = () => {
    if (isCurrentUser) {
      return "secondary";
    }

    if (optimisticFollow.isFollowing) {
      return "outline";
    }

    return "default";
  };

  const handleFollowedAction = async () => {
    if (isCurrentUser) {
      return;
    }
    try {
      addOptimisticFollow();
      await followAction(userId);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form action={handleFollowedAction}>
      <Button variant={getButtonVariant()} className="w-full">
        {getButtonContent()}
      </Button>
    </form>
  );
};

export default FollowButton;
