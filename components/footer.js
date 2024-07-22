import { Link, Box, useColorModeValue } from '@chakra-ui/react'
import { useIntl } from 'react-intl'

const Footer = () => {
  const { formatMessage: t } = useIntl()

  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      {t({ id: 'Footer', defaultMessage: 'Undefined' })}{' '}
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/nbvan239"
        color={useColorModeValue('#3d7aed', '#ff63c3')}
        borderRadius="sm"
      >
        @nbvan239
      </Link>
    </Box>
  )
}

export default Footer
