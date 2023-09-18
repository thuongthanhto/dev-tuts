
import path from 'path'
import fs from 'fs/promises'
import { Fragment } from 'react'
import Link from 'next/link';

export default function Products(props: any) {
  const { products} = props;

  return (
    <Fragment>
      {products.map((product: any) => (
        <li key={product.id}><Link href={`/products/${product.id}`}>{product.title}</Link></li>
      ))}
    </Fragment>
  )
}

export async function getStaticProps() {
  console.log('(Re-)generating...', new Date().toISOString())
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json')
  const jsonData = await fs.readFile(filePath, 'utf-8')
  const data = JSON.parse(jsonData)

  if (!data) {
    return {
      redirect: {
        destination: '/no-data'
      }
    }
  }

  if (data.products.length === 0) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      products: data.products,
    },
    revalidate: 10,
  }
}
