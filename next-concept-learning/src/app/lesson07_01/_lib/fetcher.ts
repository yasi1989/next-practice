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

export const getUser = async (id: string) => {
    const res = await fetch(`https://dummyjson.com/users/${id}`);
    return (await res.json()) as User;
}

export type User = {
    id: number;
    username: string;
}