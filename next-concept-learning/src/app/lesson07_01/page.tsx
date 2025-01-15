import React from 'react'
import { getPosts } from './_lib/fetcher'
import PostItem from './_components/PostItem';

const Page = async () => {
    const {posts} = await getPosts();
  return (
    <>
        <h1>Posts</h1>
        <ul>
            {posts.map((post) => (
                <li key={post.id}><PostItem post={post} /></li>
            ))}
        </ul>
    </>
  )
}

export default Page