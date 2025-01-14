import PostBody from "./_components/PostBody";
import Comments from "./_components/Comments";

const Page = async () => {
  const [user, posts] = await Promise.all([
    fetch(`https://dummyjson.com/users/1`).then((res) => res.json()),
    fetch(`https://dummyjson.com/posts/user/1`).then((res) => res.json()),
  ]);
  return (
    <>
      <PostBody postId="1" />
      <Comments postId="1" />
      <div>------------------</div>
      <div>{user.age}</div>
      <div>{posts.posts.map((p) => (
        <div key={p.id}>{p.title}</div>
      ))}</div>
    </>
  );
};

export default Page;
