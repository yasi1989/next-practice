import { getUser, Post } from "../_lib/fetcher";

type PostItemProps = {
  post: Post;
};

const PostItem = async ({ post }: PostItemProps) => {
  const user = await getUser(post.userId);
  return (
    <div className="border-t-2">
      <h3>{post.title}</h3>
      <dl>
        <dt>author</dt>
        <dd>{user?.username ?? "[unknown author]"}</dd>
      </dl>
      <p>{post.body}</p>
    </div>
  );
};

export default PostItem;
