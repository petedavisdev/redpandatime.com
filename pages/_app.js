import Link from 'next/link'
import 'nextra-theme-blog/style.css'
import Head from 'next/head'

import '../styles/main.css'

export default function Nextra({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS"
          href="/feed.xml"
        />
        <link
          rel="preload"
          href="/fonts/Inter-roman.latin.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <header
        style={{ marginTop: '2rem', textAlign: 'center', fontWeight: 'bold' }}
      >
        <Link href="/">
          <a>Red Panda Time</a>
        </Link>
      </header>
      <Component {...pageProps} />
    </>
  )
}
