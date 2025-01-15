import CommentsContainer from "./_containers/comment/container";
import PostContainer from "./_containers/post/container";


const Page = () => {
    const postId = "1";
  return (
    <>
        <PostContainer postId={postId} />
        <CommentsContainer postId={postId} />
    </>
  )
}

export default Page