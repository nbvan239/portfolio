import NextLink from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 1.9em;
  line-height: 1.25em

  padding: 0.7em img {
    transition: 200ms ease
  }

  &:hover img {
    transform: scaleX(-1)
  }
`

const Logo = () => {
  const dinoImg = `/assets/dino.webp`

  return (
    <NextLink href="/" passHref scroll={false}>
      <a>
        <LogoBox>
          <Image
            src={dinoImg}
            width={20}
            height={20}
            alt="logo"
            style={{
              filter: useColorModeValue('unset', 'invert(1)'),
              transition: 'transform 150ms'
            }}
          />
          <Text color={useColorModeValue('gray.800', '#efefef')}>
            Văn&#x27;s Portfolio
          </Text>
        </LogoBox>
      </a>
    </NextLink>
  )
}

export default Logo
