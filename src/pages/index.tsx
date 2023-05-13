import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>

      <h1 className='font-bold text-blue border border-red border-6 p-5 sm:text-red'>
        HOME PAGE
      </h1>
    </>
  )
}

