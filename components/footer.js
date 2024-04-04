// import { Box, Link } from '@chakra-ui/react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='text-center opacity-40 text-sm' align="center" opacity={0.4} fontSize="sm">
      © 2024 Yusuf Zhafir Shadiq. All rights reserved. This website is built
      based on the{' '}
      <Link
      className='dark:text-pink-400 text-[#3D7AED]'
        passHref
        href="https://www.craftz.dog/"
        target="_blank"
      >
        Takuya Matsuyama&apos;s website
      </Link>
    </div>
  )
}

export default Footer
