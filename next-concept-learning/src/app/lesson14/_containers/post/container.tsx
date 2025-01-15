import { getPost } from "../../_lib/fetcher";
import UserProfileContainer from "../user/container";
import PostPresantational from "./presentational";

const PostContainer = async ({postId}: {postId: string}) => {
    const post = await getPost(postId);
  return (
    <PostPresantational post={post}>
      <UserProfileContainer />
    </PostPresantational>
  )
}

export default PostContainer