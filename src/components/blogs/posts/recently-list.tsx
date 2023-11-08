const RecentlyList = () => {
  const fakePosts = [
    {
      title: 'How to Build a Blog with Next.js',
      createdAt: '2021-09-01',
    },
    {
      title: 'How to Build a Blog with Next.js 1',
      createdAt: '2021-09-01',
    },
  ]
  return (
    <div>
      <h2 className="text-[#242424] font-semibold text-[18px]">Recently read</h2>

      <div className="mt-[16px] space-y-2">
        {fakePosts.map((post) => (
          <div key={post.title}>
            <div className="font-bold text-[#242424] mb-[2px]">{post.title}</div>
            <div className="text-[#6B6B6B] text-[13px]">{post.createdAt}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentlyList
