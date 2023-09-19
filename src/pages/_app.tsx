import type { AppProps } from 'next/app'

import Layout from 'components/layout/layout'
import '../styles/globals.css'
import Head from 'next/head'
import { NotificationContextProvider } from 'store/notification-context'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NotificationContextProvider>
    <Layout>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </Layout>
    </NotificationContextProvider>
  )
}
