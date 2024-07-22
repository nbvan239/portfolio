import { FaFileAlt, FaFileSignature } from 'react-icons/fa'
import { GiPlatform } from 'react-icons/gi'
import { RiCodeSSlashFill, RiPantoneLine } from 'react-icons/ri'
import { SiGithub } from 'react-icons/si'

const worksDetail = {
  QuizPractice: {
    information: {
      static: [
        {
          title: 'Works.Badge.Platform',
          icon: <GiPlatform />,
          localeId: 'Works.Web.Description'
        }
      ],
      external: [
        {
          title: 'Navbar.Source',
          icon: <RiCodeSSlashFill />,
          leftIcon: <SiGithub />,
          link: 'https://github.com/nbvan239/SWP391_Project_QuizPractice',
          content: 'Quiz Practice'
        }
      ]
    },
    stack: 'Java Springboot, Bootstrap 5.1, jQuery 3.6 & SQL Server',
  },
  SCMS: {
    information: {
      static: [
        {
          title: 'Works.Badge.Platform',
          icon: <GiPlatform />,
          localeId: 'Works.Web.Description'
        }
      ],
      external: [
        {
          title: 'Navbar.Source',
          icon: <FaFileSignature />,
          link: 'https://gitlab.com/levietaqviet1/studentcomplaintmanagementsystem',
          localeId: 'Works.Link'
        }
      ]
    },
    stack: 'C# .NET 8, VueJs, jQuery 3.6 Bootstrap 5.1 & SQL Server',
  },
  VtvLivePhoto: {
    information: {
      static: [
        {
          title: 'Works.Badge.Platform',
          icon: <GiPlatform />,
          localeId: 'Works.Web.Description'
        }
      ],
      external: [
        {
          title: 'Works.Badge.Demo',
          icon: <FaFileAlt />,
          link: 'https://photo.vtvlive.vn',
          content: 'Internal WebApp'
        },
        {
          title: 'Navbar.Source',
          icon: <RiCodeSSlashFill />,
          leftIcon: <SiGithub />,
          link: 'https://github.com/nbvan239/face-recognizing-app',
          content: 'Demo Product'
        }
      ]
    },
    stack: 'Nextjs 14, MongoDb, Aws S3',
  },
  VansPortfolio: {
    information: {
      static: [
        {
          title: 'Works.Badge.Platform',
          icon: <GiPlatform />,
          localeId: 'Works.Web.Description'
        }
      ],
      internal: [
        {
          title: 'Works.Badge.Demo',
          icon: <FaFileAlt />,
          rightIcon: <RiPantoneLine />,
          link: '/',
          localeId: '404.Return'
        }
      ],
      external: [
        {
          title: 'Navbar.Source',
          icon: <RiCodeSSlashFill />,
          leftIcon: <SiGithub />,
          link: 'https://github.com/nbvan239/portfolio',
          content: 'nbvan239/portfolio'
        }
      ]
    },
    stack: 'Next.js, Chakra UI, Emotion, Three.js & Framer Motion',
    images: [
      {
        src: '/works/khanhsportfolio_thumbnail_large.webp',
        caption: 'My Portfolio'
      }
    ]
  },
  LoadBalancer: {
    information: {
      static: [
        {
          title: 'Works.Badge.Platform',
          icon: <GiPlatform />,
          localeId: 'Works.Embedded.LoadBalancer.Platform'
        }
      ]
    },
    stack: 'NodeMCU (ESP-12), C++11 & Esp8266 3.0.2',
    images: [
      {
        src: '/works/loadbalancer_thumbnail_large.webp',
        caption: 'Load Balancer Diagram'
      }
    ]
  },
  GuardiansOfEldoria: {
    information: {
      static: [
        {
          title: 'Works.Badge.Platform',
          icon: <GiPlatform />,
          localeId: 'Works.Web.Description'
        }
      ],
      external: [
        {
          title: 'Navbar.Source',
          icon: <RiCodeSSlashFill />,
          leftIcon: <SiGithub />,
          link: 'https://github.com/levietaqviet1/GuardiansOfEldoria_Project',
          content: 'Guardians Of Eldoria'
        }
      ]
    },
    stack: 'Unity, C# , ShaderLab, HLSL',
  },  
  E_LearningAppMobile: {
    information: {
      static: [
        {
          title: 'Works.Badge.Platform',
          icon: <GiPlatform />,
          localeId: 'Works.Web.Description'
        }
      ],
      external: [
        {
          title: 'Navbar.Source',
          icon: <RiCodeSSlashFill />,
          leftIcon: <SiGithub />,
          link: 'https://github.com/levietaqviet1/E_LearningAppMobile',
          content: 'E_Learning App Mobile'
        }
      ]
    },
    stack: 'Java ,Android Studio, Bootstrap 5.1, jQuery 3.6 & SQL Server',
  },
}

export default worksDetail
