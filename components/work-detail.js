import Head from 'next/head'
import { useState } from 'react'
import Image from 'next/image'
import {
  Container,
  Badge,
  Box,
  useColorModeValue,
  Button,
  List,
  ListItem,
  Link,
  Text,
  Spinner
} from '@chakra-ui/react'
import { SmallCloseIcon } from '@chakra-ui/icons'
import { Title, CondensedTitle } from './work'
import { JustifyParagraph } from './paragraph'
import { useIntl } from 'react-intl'
import { motion } from 'framer-motion'
import { CustomBadge } from '../components/icon-badge'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { BiServer } from 'react-icons/bi'
import ImgsViewer from '@haz3l/react-images-viewer'

export const Boilerplate = ({ metadata, setOpen, details }) => {
  const { formatMessage: t } = useIntl()
  const [isViewerOpen, setIsViewerOpen] = useState(false)
  const [currentIndex, setIndex] = useState(0)

  const overlayColor = useColorModeValue('#0000003d', '#000000a8')
  const containerColor = useColorModeValue('#fafdff', '#202023')
  const closeSymbolColor = useColorModeValue('#fff', '#fafdff')
  const depthShadow = useColorModeValue(
    '#33333321 0 0 2em',
    '#00000099 0 0 2em'
  )
  const badgeColor = useColorModeValue('#e6ebf1', '#5e5e5e')


  const closeImageViewer = () => {
    setIsViewerOpen(false)
    setIndex(0)
  }

  const gotoNextImg = () => {
    setIndex(current => current + 1)
  }

  const gotoPrevImg = () => {
    setIndex(current => current - 1)
  }

  const CustomSpinner = () => (
    <Spinner color="#fff" w="50px" h="50px" speed="0.65s" thickness="4px" />
  )

  const closeModal = () => {
    setOpen({})
  }

  const theme = {
    header: {
      height: 50
    },
    container: {
      background: 'rgba(0, 0, 0, .75)'
    },
    arrow__size__medium: {
      backgroundColor: 'rgba(255, 255, 255, .8)',
      opacity: 0.6,
      transition: 'opacity 200ms',
      borderRadius: 40,
      height: 40,
      marginTop: -20,
      fill: '#222',

      '@media (min-width: 768px)': {
        height: 50,
        width: 50,
        padding: 13
      },

      ':hover': {
        opacity: 1
      }
    },
    arrow__direction__left: { marginLeft: 10, paddingLeft: 7 },
    arrow__direction__right: { marginRight: 10, paddingRight: 7 },

    close: {
      height: 50,
      width: 50
    }
  }

  return (
    <>
      <Head>
        <title>{metadata.title} - Văn&#x27;s Portfolio</title>
      </Head>
      <Box
        position="fixed"
        top={0}
        left={0}
        right={0}
        bottom={0}
        overflowX="hidden"
        overflowY="scroll"
        css={{ '&::-webkit-scrollbar': { display: 'none' } }}
        zIndex={2}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
          transition={{ duration: 0.3 }}
          style={{
            pointerEvents: 'auto',
            zIndex: '-1',
            position: 'fixed',
            background: overlayColor,
            top: '0',
            bottom: '0',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '100%',
            cursor: 'pointer'
          }}
          onClick={closeModal}
        />
        <Container
          as={motion.div}
          my={{ base: '7vh', sm: '10vh' }}
          bg={containerColor}
          p={0}
          borderRadius="2xl"
          position="relative"
          overflow="hidden"
          layoutId={`card-container-${metadata.id}`}
        >
          <Button
            p={1.5}
            m={4}
            h="auto"
            minW="auto"
            top={0}
            right={0}
            position="absolute"
            bg={closeSymbolColor}
            color="#202023"
            fontSize={18}
            zIndex={1}
            borderRadius="full"
            boxShadow="rgba(0, 0, 0, 0.24) 0 .25em .5em"
            _active={{}}
            _hover={{ bg: '#cdcdcd' }}
            onClick={closeModal}
            aria-label={t({
              id: `ariaLabel.close`,
              defaultMessage: 'Undefined'
            })}
          >
            <SmallCloseIcon />
          </Button>
          <motion.div
            layoutId={`card-image-container-${metadata.id}`}
            style={{
              display: 'flex',
              position: 'relative'
            }}
          >
            <Image
              src={metadata.thumbnail}
              alt={metadata.title}
              placeholder="blur"
              loading="lazy"
            />
            <Box
              position="absolute"
              top="100%"
              height="9999px"
              width="100%"
              boxShadow={depthShadow}
            />
          </motion.div>
          <Box
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            p={{ base: '1em', sm: '1.3em', md: '1.5em' }}
            position="relative"
          >
            <motion.div layoutId={`title-container-${metadata.id}`}>
              <Title
                parent={t({
                  id: 'Navbar.Works',
                  defaultMessage: 'Undefined'
                })}
                onClick={closeModal}
              >
                {metadata.title}
                <Badge ml={3} bg={badgeColor}>
                  {t({
                    id: `Works.${metadata.category}.${metadata.id}.Lifespan`,
                    defaultMessage: 'Undefined'
                  })}
                </Badge>
              </Title>
            </motion.div>
            <motion.div
              layoutId={`description-container-${metadata.id}`}
              style={{ marginTop: '.25em', marginBottom: '.75em' }}
            >
              <JustifyParagraph>
                {t({
                  id: `Works.${metadata.category}.${metadata.id}.Description`,
                  defaultMessage: 'Undefined'
                })}
              </JustifyParagraph>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <List mx={3}>
                {(details.information.internal ?? []).map(el => (
                  <ListItem key={`internal-${el.title}`}>
                    <CustomBadge icon={el.icon}>
                      {t({ id: el.title, defaultMessage: 'Undefined' })}
                    </CustomBadge>
                    <Link
                      variant="align_icon"
                      target="_blank"
                      href={el.link}
                      gap={1}
                    >
                      {t({
                        id: el.localeId,
                        defaultMessage: 'Undefined'
                      })}
                      {el.rightIcon}
                    </Link>
                  </ListItem>
                ))}
                {(details.information.external ?? []).map(el => (
                  <ListItem key={`external-${el.title}`}>
                    <CustomBadge icon={el.icon}>
                      {t({ id: el.title, defaultMessage: 'Undefined' })}
                    </CustomBadge>
                    <Link
                      variant="align_icon"
                      target="_blank"
                      href={el.link}
                      gap={1}
                    >
                      {el.leftIcon}
                      {el.localeId
                        ? t({
                            id: el.localeId,
                            defaultMessage: 'Undefined'
                          })
                        : el.content}
                      <ExternalLinkIcon />
                    </Link>
                  </ListItem>
                ))}
                {(details.information.static ?? []).map(el => (
                  <ListItem key={`static-${el.title}`}>
                    <CustomBadge icon={el.icon}>
                      {t({ id: el.title, defaultMessage: 'Undefined' })}
                    </CustomBadge>
                    <span>
                      {t({
                        id: el.localeId,
                        defaultMessage: 'Undefined'
                      })}
                    </span>
                  </ListItem>
                ))}
                {typeof details.stack === 'undefined' || (
                  <ListItem>
                    <CustomBadge icon={<BiServer />}>
                      {t({
                        id: 'Works.Badge.Stack',
                        defaultMessage: 'Undefined'
                      })}
                    </CustomBadge>
                    <span>{details.stack}</span>
                  </ListItem>
                )}
              </List>
              <ImgsViewer
                imgs={details.images}
                currImg={currentIndex}
                isOpen={isViewerOpen}
                onClose={closeImageViewer}
                onClickNext={gotoNextImg}
                onClickPrev={gotoPrevImg}
                onClickThumbnail={index => setIndex(index)}
                spinner={CustomSpinner}
                theme={theme}
                backdropCloseable
                showThumbnails
              />
            </motion.div>
          </Box>
        </Container>
      </Box>
    </>
  )
}

export const CondensedBoilerplate = ({
  title,
  id,
  category,
  thumbnail,
  setOpen
}) => {
  const { formatMessage: t } = useIntl()

  return (
    <Box
      as={motion.div}
      w="100%"
      maxW={421}
      p={3}
      m="0 auto"
      borderRadius="xl"
      _hover={{ bg: useColorModeValue('#ffffff6b', '#ffffff1a') }}
      layoutId={`card-container-${id}`}
      cursor="pointer"
      textAlign="center"
      onClick={() =>
        setOpen({
          title: title,
          id: id,
          category: category,
          thumbnail: thumbnail
        })
      }
    >
      <motion.div
        layoutId={`card-image-container-${id}`}
        style={{
          display: 'flex',
          borderRadius: '.75em',
          boxShadow: useColorModeValue(
            '#20202363 0 .3em .5em',
            '#00000063 0 .3em 1em'
          )
        }}
      >
        <Image
          src={thumbnail}
          alt={title}
          width={720}
          height={400}
          className="grid-item-thumbnail"
          placeholder="blur"
          loading="lazy"
          objectFit="cover"
          objectPosition="top"
        />
      </motion.div>
      <>
        <motion.div layoutId={`title-container-${id}`}>
          <CondensedTitle>
            {title}
            <Badge ml={3} bg={useColorModeValue('#00000014', '#ffffff26')}>
              {t({
                id: `Works.${category}.${id}.Lifespan`,
                defaultMessage: 'Undefined'
              })}
            </Badge>
          </CondensedTitle>
        </motion.div>
        <motion.div layoutId={`description-container-${id}`}>
          <Text fontSize={14}>
            {t({
              id: `Works.${category}.${id}.Description`,
              defaultMessage: 'Undefined'
            })}
          </Text>
        </motion.div>
      </>
    </Box>
  )
}
