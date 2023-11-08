import PostItem from './post-item'

function AllPosts(props: any) {
  const { posts } = props

  return (
    <div className="divide-y divide-[rgb(242, 242, 242)]">
      {posts.map((post: any) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </div>
  )
}

export default AllPosts
