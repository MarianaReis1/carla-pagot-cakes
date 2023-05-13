import Head from 'next/head'
import Navigation from '@/components/Navigation'

export default function BaseLayout({children}:any) {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Carla Pagot Cakes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation></Navigation>

      <main className="">
        {children}
      </main>
    </>
  )
}