export type Post = {
    id:string;
    title: string;
}

export async function getPost(postId: string) {
    const res = await fetch(`https://dummyjson.com/posts/${postId}`)
    return (await res.json()) as Post;
}