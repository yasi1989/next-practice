import { Post } from "../../_lib/fetcher";

type PostPresantationalProps = {
  post: Post;
  children: React.ReactNode;
};

const PostPresantational = ({ post, children }: PostPresantationalProps) => {
  return (
    <>
      {children}
      <div>{post.title}</div>
    </>
  );
};

export default PostPresantational;
