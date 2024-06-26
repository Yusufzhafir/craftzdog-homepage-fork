import Link from 'next/link'
import { Text, useColorModeValue } from '@chakra-ui/react'
// import FootprintIcon from './icons/footprint'
import Abstract from './icons/abstract'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  > svg {
    transition: 200ms ease;
  }

  &:hover > svg {
    transform: rotate(20deg);
  }
`

const Logo = () => {
  return (
    <Link href="/" scroll={false}>
      <LogoBox>
        {/* <FootprintIcon /> */}
        <Abstract />
        <Text
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          fontWeight="bold"
          ml={3}
        >
          Yusuf Shadiq
        </Text>
      </LogoBox>
    </Link>
  )
}

export default Logo
