import Head from 'next/head'
// import dynamic from 'next/dynamic'
import NavBar from '../navbar'
// import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
// import VoxelDogLoader from '../voxel-dog-loader'

// const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
//   ssr: false,
//   loading: () => <VoxelDogLoader />
// })

const Main = ({ children, router }) => {
  return (
    <main className='pb-8' as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Shadiq's homepage" />
        <meta name="author" content="Yusuf Shadiq" />
        <meta name="author" content="Yusuf Shadiq" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="https://www.shadiq.id/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Yusuf Shadiq" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="shadiq" />
        <meta name="twitter:creator" content="shadiq" />
        <meta
          name="twitter:image"
          content="https://www.shadiq.id/blob_card.png"
        />
        <meta property="og:site_name" content="Yusuf Shadiq" />
        <meta name="og:title" content="Yusuf Shadiq" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.shadiq.id/blob_card.png"
        />
        <meta
          name="google-site-verification"
          content="qvnKPyOMUOkZRlO87tcdjY2BzxyTLT-wqFb2PBKp9Fs"
        />
        <title>Yusuf Shadiq - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />
      <div className='ml-auto mr-auto ps-4 pe-4 pt-14 max-w-3xl'>
        {children}
        <Footer />
      </div>
      {/* <Container maxW="container.md" pt={14}>
        {children}
        <Footer />
      </Container> */}
    </main>
  )
}
{/* <LazyVoxelDog /> */}


export default Main
