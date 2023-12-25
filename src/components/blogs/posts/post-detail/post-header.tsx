import Image from 'next/image'

import classes from './post-header.module.css'

function PostHeader(props: any) {
  const { title, image } = props

  return (
    <header>
      <h1 className="text-[42px] leading-[52px] font-bold">{title}</h1>
      <div className="my-[56px]">
        <Image src={image} alt={title} width={700} height={394} className="w-full h-auto" />
      </div>
    </header>
  )
}

export default PostHeader
