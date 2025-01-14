const Comments = async ({postId}: {postId: string}) => {
    const res = await fetch(`https://dummyjson.com/posts/${postId}/comments`, {cache: "no-store"});
    const data = await res.json();
  return (
    <div>{data.comments.map((c) => (
        <div key={c.id}>{c.body}</div>
    ))}</div>
  )
}

export default Comments