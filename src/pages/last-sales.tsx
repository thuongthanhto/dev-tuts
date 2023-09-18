import { useEffect, useState } from 'react'
import useSWR from 'swr'

export default function LastSalesPage(props: any) {
  const [sales, setSales] = useState<any>(props.sales)

  const { data, error } = useSWR(
    'https://august-tract-308800-default-rtdb.asia-southeast1.firebasedatabase.app/sales.json',
    (url) => fetch(url).then((res) => res.json()),
  )

  console.log('data', data)
  useEffect(() => {
    if (data) {
      const transformedSales = []

      for (const key in data) {
        transformedSales.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume,
        })
      }

      setSales(transformedSales)
    }
  }, [data])

  // useEffect(() => {
  //   setIsLoading(true)
  //   fetch('https://august-tract-308800-default-rtdb.asia-southeast1.firebasedatabase.app/sales.json')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const transformedSales = []

  //       for (const key in data) {
  //         transformedSales.push({
  //           id: key,
  //           username: data[key].username,
  //           volume: data[key].volume,
  //         })
  //       }

  //       setSales(transformedSales)
  //       setIsLoading(false)
  //     })
  // }, [])

  if (error) {
    return <p>Failed to load</p>
  }

  if (!data && !sales) {
    return <p>Loading...</p>
  }

  return (
    <ul>
      {sales.map((sale: any) => (
        <li key={sale.id}>
          {sale.username} - ${sale.volume}
        </li>
      ))}
    </ul>
  )
}

export async function getStaticProps() {
  const response = await fetch(
    'https://august-tract-308800-default-rtdb.asia-southeast1.firebasedatabase.app/sales.json',
  )
  const data = await response.json()

  const transformedSales = []

  for (const key in data) {
    transformedSales.push({
      id: key,
      username: data[key].username,
      volume: data[key].volume,
    })
  }

  return {
    props: {
      sales: transformedSales,
    },
    revalidate: 10,
  }
}
