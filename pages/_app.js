import Layout from '../components/layouts/main'
// import { AnimatePresence } from 'framer-motion'
import Chakra from '../components/chakra'
import { Analytics } from '@vercel/analytics/react'
import { Plus_Jakarta_Sans } from 'next/font/google'
import '../public/style.css'

const JKTSans = Plus_Jakarta_Sans({
  display: 'swap',
  subsets: ['latin'],
  weight: ['700', '500']
})
// if (typeof window !== 'undefined') {
//   window.history.scrollRestoration = 'manual'
// }

function Website({ Component, pageProps, router }) {
  return (
    <Chakra
      cookies={pageProps.cookies}
      fonts={{
        heading: JKTSans.style.fontFamily,
        body: JKTSans.style.fontFamily
      }}
    >
      <Layout router={router}>
        {/* <AnimatePresence
          mode="wait"
          initial={true}
          onExitComplete={() => {
            if (typeof window !== 'undefined') {
              window.scrollTo({ top: 0 })
            }
          }}
        > */}
          <Component {...pageProps} key={router.route} />
        {/* </AnimatePresence> */}
        <Analytics />
      </Layout>
    </Chakra>
  )
}

export default Website
