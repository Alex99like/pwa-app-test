import { MetaPWA } from '@/meta/MetaPWA'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <MetaPWA />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
