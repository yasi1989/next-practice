"use client";
import { deleteArticle } from "@/blogAPI";
import { useRouter } from "next/navigation";
import React from "react";

type DeteleButtonProps = {
  id: string;
};

const DeleteButton = ({ id }: DeteleButtonProps) => {
  const router = useRouter();

  const handleDelete = async (id: string) => {
    //await deleteArticle(id);
    const API_URL = process.env.NEXT_PUBLIC_API_URL!;
    await fetch(`${API_URL}/api/${id}`, {
      method: "DELETE",
    });
    router.push("/");
  };
  return (
    <button
      onClick={() => handleDelete(id)}
      className="bg-red-500 hover:bg-red-600 rounded-md py-2 px-5"
    >
      削除
    </button>
  );
};

export default DeleteButton;
