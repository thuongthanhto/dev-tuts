import Head from 'next/head'
import { Fragment } from 'react'

import { getPostData, getPostsFiles } from 'lib/posts-util'
import PostContent from 'components/blogs/posts/post-detail/post-content'

function PostDetailPage(props: any) {
  return (
    <Fragment>
      <Head>
        <title>{props.post.title}</title>
        <meta name="description" content={props.post.excerpt} />
      </Head>
      <PostContent post={props.post} />
    </Fragment>
  )
}

export function getStaticProps(context: any) {
  const { params } = context
  const { slug } = params

  const postData = getPostData(slug)

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  }
}

export function getStaticPaths() {
  const postFilenames = getPostsFiles()

  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ''))

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  }
}

export default PostDetailPage
