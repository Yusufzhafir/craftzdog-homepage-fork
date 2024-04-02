import { Box,Link } from '@chakra-ui/react'
import NextLink from 'next/link'


const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      This website is built based on the <Link as={NextLink} passHref href='https://www.craftz.dog/' target='_blank'>Takuya Matsuyama's website</Link>
    </Box>
  )
}

export default Footer
