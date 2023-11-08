import Link from 'next/link'
import Image from 'next/image'
import Layout from 'components/Layout'
import { NextSeo } from 'next-seo'
import { getAllPosts, getFeaturedPosts } from 'lib/posts-util'
import AllPosts from 'components/blogs/posts/all-posts'
import RecentlyList from 'components/blogs/posts/recently-list'

const HomePage = (props: any) => {
  return (
    <Layout>
      <NextSeo
        title="Thuong To - ReactJS TeamLead"
        titleTemplate="Thuong To - ReactJS TeamLead"
        defaultTitle="Thuong To - ReactJS TeamLead"
        description="I am a Senior Frontend Blockchain with over 7 years of frontend and Web3 experience."
        canonical="https://thuongthanhto.com/"
        openGraph={{
          url: 'https://thuongthanhto.com/',
          title: 'Thuong To - ReactJS TeamLead',
          description: 'I am a Senior Frontend Blockchain with over 7 years of frontend and Web3 experience.',
          images: [
            {
              url: '/avatar.png',
              width: 200,
              height: 200,
              alt: 'Thuong To - ReactJS TeamLead',
            },
          ],
        }}
      />
      <div className="container mx-auto flex flex-col lg:flex-row justify-evenly mt-[56px]">
        <div className="min-w-0 md:min-w-[728px] md:max-w-[728px]">
          <AllPosts posts={props.posts} />
        </div>
        <div className="hidden md:block md:min-w-[368px] md:max-w-[368px] pl-8 border-l border-[#F2F2F2] min-h-screen pt-6">
          <RecentlyList />
        </div>
      </div>
    </Layout>
  )
}

export function getStaticProps() {
  const allPosts = getAllPosts()

  return {
    props: {
      posts: allPosts,
    },
  }
}

export default HomePage
