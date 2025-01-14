
const PostBody = async ({postId} : { postId: string}) => {
    const res = await fetch(`https://dummyjson.com/posts/${postId}`, { cache: "no-store" });
    const post = await res.json();
  return (
    <div className="">{post.title}</div>
  )
}

export default PostBody