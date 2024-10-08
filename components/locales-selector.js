import NextLink from 'next/link'
import {
  Tab,
  Tabs,
  TabList,
  Text,
  TabIndicator,
  Link,
  useColorModeValue
} from '@chakra-ui/react'

const LocaleId = {
  'en-US': 0,
  'vi-VN': 2,
  undefined: -1
}

const TabStyling = ({ locale, selected }) => {
  const color = useColorModeValue('gray200', '#e9e9ea')
  const invertColor = useColorModeValue('#ffffff', '#1A202C')
  const title = locale.substring(0, 2).toUpperCase()

  return locale === selected ? (
    <Tab
      position="relative"
      zIndex={1}
      fontWeight="semibold"
      color={invertColor}
    >
      {title}
    </Tab>
  ) : (
    <Tab position="relative" zIndex={1} fontWeight="semibold" p={0}>
      <Link as={NextLink} href="" locale={locale} passHref>
        <Text
          color={color}
          p=".5em 1em"
          _hover={{ textDecoration: 'underline 2px', textUnderlineOffset: 3 }}
        >
          {title}
        </Text>
      </Link>
    </Tab>
  )
}

const LocalesSelector = ({ currentLocale }) => {
  const temp = LocaleId[currentLocale]
  const selected = temp + 1 ? temp : -1

  return (
    <Tabs position="relative" variant="unstyled" defaultIndex={selected}>
      <TabList>
        <TabStyling locale="en-US" selected={currentLocale}></TabStyling>
        <TabStyling locale="vi-VN" selected={currentLocale}></TabStyling>
      </TabList>
      <TabIndicator
        mt="-2.5em"
        h="2.5em"
        bg={useColorModeValue('#375ba3', '#4fd1c5')}
        borderRadius="xl"
        boxShadow="lg"
      />
    </Tabs>
  )
}

export default LocalesSelector
