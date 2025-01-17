type Comment = {
  id: string;
  body: string;
}

const Comments = async ({postId}: {postId: string}) => {
    const res = await fetch(`https://dummyjson.com/posts/${postId}/comments`, {cache: "no-store"});
    const data = (await res.json()) as { comments: Comment[]};
  return (
    <div>{data.comments.map((c) => (
        <div key={c.id}>{c.body}</div>
    ))}</div>
  )
}

export default Comments