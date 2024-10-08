import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra,
  Collapse
} from '@chakra-ui/react'
import { ChevronRightIcon, InfoOutlineIcon } from '@chakra-ui/icons'
import { JustifyParagraph } from '../components/paragraph'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Comforts from '../components/comforts'
import { SiStackoverflow, SiGithub, SiGitlab } from 'react-icons/si'
import Image from 'next/image'
import { useIntl } from 'react-intl'
import Events from '../components/timeline'
import timeline from '../data/timeline.json'
import { useState } from 'react'
import SlidingButton from '../components/slide-button'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = ({ windowWidth }) => {
  const { formatMessage: t } = useIntl()
  const AccentColor = useColorModeValue('#385898', 'teal.200')
  const HoverColor = useColorModeValue('#ffffff52', '#ffffff1a')
  const BtnTextColor = useColorModeValue('#767676', '#ededee')
  const CollapseShadow = useColorModeValue(
    '0 -1.25em 1.25em -1.5em #000',
    '0 -1.9em 1.25em -1.25em #000'
  )
  const [show, setShow] = useState(false)
  const handleToggle = () => {
    setShow(!show)
  }

  return (
    <Layout>
      <Container maxW="32.5em" overflow="hidden">
        <Box
          position="absolute"
          top={['-13em', '-15.5em', '-19.3em']}
          right={0}
          borderRadius="lg"
          bg={useColorModeValue('#ffffff63', '#44444491')}
          backdropFilter="blur(12px)"
        >
          <Box
            display="flex"
            p=".4em .75em"
            alignItems="center"
            fontWeight="semibold"
          >
            <InfoOutlineIcon mr={1.5} />
            {t({ id: 'Home.InteractHint', defaultMessage: 'Undefined' })}!
          </Box>
        </Box>
        <Box
          mb={6}
          p={3}
          bg={useColorModeValue('#ffffff63', '#44444491')}
          textAlign="center"
          borderRadius="lg"
          fontWeight="semibold"
          backdropFilter="blur(12px)"
        >
          {t({ id: 'Home.Greeting', defaultMessage: 'Undefined' })}!
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Nguyễn Bá Văn
            </Heading>
            <p>{t({ id: 'Home.Hobby', defaultMessage: 'Undefined' })}</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Box
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              w={100}
              h={100}
              display="inline-block"
              borderRadius="full"
              overflow="hidden"
            >
              <ProfileImage
                src="/assets/profile_pic.webp"
                alt="Profile image"
                borderRadius="full"
                width="100%"
                height="100%"
              />
            </Box>
          </Box>
        </Box>

        <Section mb={7} delay={0.1}>
          <Heading as="h3" variant="section-title">
            {t({ id: 'Home.Bio.Title', defaultMessage: 'Undefined' })}
          </Heading>
          <JustifyParagraph>
            {t({ id: 'Home.Bio.Content', defaultMessage: 'Undefined' })}
          </JustifyParagraph>
          <Box align="center" mt={4}>
            <SlidingButton
              ariaLabel={t({
                id: 'Home.Works.Button',
                defaultMessage: 'Undefined'
              })}
              icon={<ChevronRightIcon />}
              href="/works"
            >
              {t({ id: 'Home.Works.Button', defaultMessage: 'Undefined' })}
            </SlidingButton>
          </Box>
        </Section>

        <Section mb={10} delay={0.2}>
          <Heading as="h3" variant="section-title">
            {t({ id: 'Home.Comfortable.Title', defaultMessage: 'Undefined' })}
          </Heading>
          <Comforts windowWidth={windowWidth} />
        </Section>

        <Section mb={6} delay={0.3}>
          <Heading as="h3" variant="section-title">
            {t({ id: 'Home.Timeline.Title', defaultMessage: 'Undefined' })}
          </Heading>
          <Collapse startingHeight={531} in={show}>
            <List spacing={4} mb={-4}>
              {(timeline ?? []).map(({ year, events }) => (
                <ListItem key={`timeline-year-${year}`}>
                  <Heading variant="year-title">{year}</Heading>
                  <Events events={events} year={year} />
                </ListItem>
              ))}
            </List>
          </Collapse>
          <Box
            left="-5%"
            w="110%"
            position="relative"
            boxShadow={show || CollapseShadow}
            align="center"
            overflow="auto"
          >
            <Button
              variant="ghost"
              display="flex"
              mt={2}
              mb={1}
              p=".25em .75em"
              pb={show && '.5em'}
              h="auto"
              flexDirection="column"
              color={useColorModeValue('#979797', '#707070')}
              _hover={{ bg: HoverColor, color: BtnTextColor }}
              onClick={handleToggle}
              aria-label={t({
                id: 'ariaLabel.timelineToggle',
                defaultMessage: 'Undefined'
              })}
            >
              <Box
                mb={-1}
                display={show ? 'inline-flex' : 'none'}
                transform="rotate(-90deg)"
              >
                <ChevronRightIcon />
              </Box>
              {show ? 'Collapse' : 'Expand'}
              <Box
                display={show ? 'none' : 'inline-flex'}
                transform="rotate(90deg)"
              >
                <ChevronRightIcon />
              </Box>
            </Button>
          </Box>
        </Section>

        <Section mb={4} delay={0.4}>
          <Heading as="h3" variant="section-title">
            {t({ id: 'Home.Social.Title', defaultMessage: 'Undefined' })}
          </Heading>
          <List>
            <ListItem>
              <Link
                variant="link_btn"
                color={AccentColor}
                _hover={{ bg: HoverColor }}
                href="https://gitlab.com/nbvan239"
                target="_blank"
              >
                <SiGitlab />
                nbvan239
              </Link>
            </ListItem>
            <ListItem>
              <Link
                variant="link_btn"
                color={AccentColor}
                _hover={{ bg: HoverColor }}
                href="https://github.com/nbvan239"
                target="_blank"
              >
                <SiGithub />
                @nbvan239
              </Link>
            </ListItem>
            <ListItem>
              <Link
                variant="link_btn"
                color={AccentColor}
                _hover={{ bg: HoverColor }}
                href="https://stackoverflow.com/users/16187630/van-nguyen"
                target="_blank"
              >
                <SiStackoverflow />
                Van Nguyen
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Home
