import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { useIntl } from 'react-intl'
import { useState } from 'react'
import lockScroll from 'react-lock-scroll'
import { AnimatePresence } from 'framer-motion'
import { Boilerplate, CondensedBoilerplate } from '../components/work-detail'
import worksDetail from '../data/works-detail'

import thumbQuizPractice from '../public/works/QuizPractice_thumbnail.webp'
import thumbSCMS from '../public/works/SCMS_thumbnail.webp'
import thumbVTVLivePhoto from '../public/works/VtvLivePhoto_thumbnail.webp'
import thumbGame from '../public/works/GuardiansOfEldoria_thumbnail.webp'
import thumbElearning from '../public/works/e_learning_thumbnail.webp'






import thumbKhanhsPortfolio from '../public/hero/placeholder.webp'
import thumbLoadBalancer from '../public/works/loadbalancer_thumbnail.webp'

const Works = () => {
  const { formatMessage: t } = useIntl()
  const [currentlyOpen, setState] = useState({})
  const isOpen = Boolean(Object.keys(currentlyOpen || {}).length)

  lockScroll(isOpen)

  return (
    <Layout title={t({ id: 'Navbar.Works', defaultMessage: 'Undefined' })}>
      <Container maxW="container.sm">
        <Heading as="h3" fontSize={20} mb={6}>
          {t({ id: 'Works.Web', defaultMessage: 'Undefined' })}
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} m={-3} spacing={2}>
          <Section mb={2}>
            <CondensedBoilerplate
              title="Quiz Practice"
              id="QuizPractice"
              category="Web"
              thumbnail={thumbQuizPractice}
              setOpen={setState}
            />
          </Section>

          <Section mb={2}>
            <CondensedBoilerplate
              title="Student Complaint Management System"
              id="SCMS"
              category="Web"
              thumbnail={thumbSCMS}
              setOpen={setState}
            />
          </Section>

          <Section mb={3} delay={0.1}>
            <CondensedBoilerplate
              title="VtvLive Photo"
              id="VtvLivePhoto"
              category="Web"
              thumbnail={thumbVTVLivePhoto}
              setOpen={setState}
            />
          </Section>

          <Section mb={2} delay={0.1}>
            <CondensedBoilerplate
              title="Văn's Portfolio"
              id="VansPortfolio"
              category="Web"
              thumbnail={thumbKhanhsPortfolio}
              setOpen={setState}
            />
          </Section>
        </SimpleGrid>

        <Section mb={2} delay={0.3}>
          <Divider my={6} />
          <Heading as="h3" fontSize={20} mb={4}>
            {t({
              id: 'Works.Embedded',
              defaultMessage: 'Undefined'
            })}
          </Heading>
        </Section>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section mb={3} delay={0.3}>
            <CondensedBoilerplate
              title="Load Balancer"
              id="LoadBalancer"
              category="Embedded"
              thumbnail={thumbLoadBalancer}
              setOpen={setState}
            />
          </Section>
        </SimpleGrid>

        <Section mb={2} delay={0.4}>
          <Divider my={6} />
          <Heading as="h3" fontSize={20} mb={4}>
            {t({ id: 'Works.Hobbies', defaultMessage: 'Undefined' })}
          </Heading>
        </Section>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section mb={3} delay={0.4}>
            <CondensedBoilerplate
              title="Guardians Of Eldoria"
              id="GuardiansOfEldoria"
              category="Hobbies"
              thumbnail={thumbGame}
              setOpen={setState}
            />
          </Section>

          <Section mb={3} delay={0.4}>
            <CondensedBoilerplate
              title="E_Learning App Mobile"
              id="E_LearningAppMobile"
              category="Hobbies"
              thumbnail={thumbElearning}
              setOpen={setState}
            />
          </Section>

        </SimpleGrid>

      

        <AnimatePresence>
          {isOpen && (
            <Boilerplate
              metadata={currentlyOpen}
              setOpen={setState}
              details={worksDetail[currentlyOpen.id]}
            />
          )}
        </AnimatePresence>
      </Container>
    </Layout>
  )
}

export default Works
