import Link from 'next/link'
import Image from 'next/image'

function PostItem(props: any) {
  const { title, image, excerpt, date, slug } = props.post

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  const imagePath = `/images/posts/${slug}/${image}`
  const linkPath = `/${slug}`

  return (
    <article>
      <div className="pt-6">
        <time className="text-sm text-[#6B6B6B]">{formattedDate}</time>

        <div className="flex mt-3 items-center">
          <Link href={linkPath} className="break-words flex-[1_1_auto]">
            <h2 className="text-xl font-bold max-h-[72px] text-ellipsis mb-2">{title}</h2>

            <div>
              <p className="max-h-[70px] text-ellipsis text-[#242424]">{excerpt}</p>
            </div>
          </Link>
          <div className="ml-[60px]">
            <Link href={linkPath}>
              <Image src={imagePath} alt={title} width={112} height={112} className="h-auto max-w-fit rounded-[5px]" />
            </Link>
          </div>
        </div>

        <div className="py-8">
          <div className="bg-[#F2F2F2] py-[2px] px-[8px] text-sm w-fit border border-[rgb(242, 242, 242)] rounded-[100px]">
            Web Development
          </div>
        </div>
      </div>
    </article>
  )
}

export default PostItem
