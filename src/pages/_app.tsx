import type { AppProps } from 'next/app'
import '@/styles/globals.css'
import BaseLayout from '@/components/BaseLayout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <BaseLayout>
      <Component {...pageProps} />
    </BaseLayout>
  )
}
