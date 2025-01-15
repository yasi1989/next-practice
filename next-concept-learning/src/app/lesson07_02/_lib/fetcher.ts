import DataLoader from "dataloader";
import React from "react";

export const getPosts = async () => {
    const res = await fetch("https://dummyjson.com/posts");
    return (await res.json()) as {
        posts: Post[];
    }
}

export type Post = {
    id: string;
    title: string;
    body: string;
    userId: string;
}

const getUserLoader = React.cache(
    () => new DataLoader((keys: readonly string[]) => batchGetUser(keys)),
);

export const getUser = async (id: string) => {
    const userLoader = getUserLoader();
    return userLoader.load(id);
}

async function batchGetUser(keys: readonly string[]) {
    const res = await fetch(`https://dummyjson.com/users/${keys.map((key) => `id=${key}`).join("&")}`);
    const {users} = (await res.json()) as {users: User[]};
    return keys.map((key) => users.find((user: User) => user.id === key) ?? null);
}

export type User = {
    id: string;
    username: string;
}