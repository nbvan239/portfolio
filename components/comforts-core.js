import { HStack, useColorModeValue } from '@chakra-ui/react';
import { BsFiletypeJava } from 'react-icons/bs';
import { RiReactjsLine } from 'react-icons/ri';
import {
  SiNextdotjs,

  SiMongodb,

  SiArduino,

  SiC,
  SiNuxtdotjs,
  SiVuedotjs,
  SiCsharp,
  SiJavascript,
  SiNodedotjs,
  SiMysql,
  SiPhp,
  SiUnity,
  SiAndroidstudio
} from 'react-icons/si';
import { IconBadge } from './icon-badge';
import { useIntl } from 'react-intl';
import { DiMsqlServer } from 'react-icons/di';
import { FaAws } from 'react-icons/fa';



const Technologies = ({ children }) => (
  <HStack
    minW={[200, 150, 200]}
    justifyContent={['flex-start', 'flex-end', 'flex-start']}
    pt={[2, 0, 2]}
  >
    {children}
  </HStack>
);

const ComfortsCore = () => {
  const { formatMessage: t } = useIntl();
  return [
    {
      title: t({
        id: 'Home.Comfortable.Content.FE',
        defaultMessage: 'Undefined'
      }),
      icons: (
        <Technologies>
          <IconBadge
            icon={<SiNextdotjs />}
            color={useColorModeValue('#000', '#fff')}
            tooltip="Next.js"
          />
          <IconBadge
            icon={<SiNuxtdotjs />}
            color={useColorModeValue('#00C58E', '#00C58E')}
            tooltip="Nuxt-3"
          />
          <IconBadge
            icon={<SiJavascript />}
            color={useColorModeValue('#F7DF1E', '#F7DF1E')}
            tooltip="Javascript"
          />
          <IconBadge
            icon={<RiReactjsLine />}
            color={useColorModeValue('#61DAFB', '#61DAFB')}
            tooltip="React"
          />
          <IconBadge
            icon={<SiVuedotjs />}
            color={useColorModeValue('#42B883', '#42B883')}
            tooltip="Vue.js"
          />
        </Technologies>
      )
    },
    {
      title: t({
        id: 'Home.Comfortable.Content.BE',
        defaultMessage: 'Undefined'
      }),
      icons: (
        <Technologies>
          <IconBadge
            icon={<SiCsharp />}
            color={useColorModeValue('#239120', '#239120')}
            tooltip="C#"
          />
          <IconBadge
            icon={<BsFiletypeJava />}
            color={useColorModeValue('#007396', '#007396')}
            tooltip="Java"
          />
          <IconBadge
            icon={<SiC />}
            color={useColorModeValue('#A8B9CC', '#A8B9CC')}
            tooltip="C"
          />
          <IconBadge
            icon={<SiNodedotjs />}
            color={useColorModeValue('#339933', '#339933')}
            tooltip="Node.js"
          />
          <IconBadge
            icon={<SiPhp />}
            color={useColorModeValue('#777BB4', '#777BB4')}
            tooltip="PHP"
          />
        </Technologies>
      )
    },
    {
      title: t({
        id: 'Home.Comfortable.Content.DB',
        defaultMessage: 'Undefined'
      }),
      icons: (
        <Technologies>
          <IconBadge
            icon={<DiMsqlServer />}
            color={useColorModeValue('#CC2927', '#CC2927')}
            tooltip="SQL Server"
          />
          <IconBadge
            icon={<SiMysql />}
            color={useColorModeValue('#4479A1', '#4479A1')}
            tooltip="MySQL"
          />
          <IconBadge
            icon={<SiMongodb />}
            color={useColorModeValue('#47A248', '#47A248')}
            tooltip="MongoDB"
          />
        </Technologies>
      )
    },
    {
      title: t({
        id: 'Home.Comfortable.Content.Others',
        defaultMessage: 'Undefined'
      }),
      icons: (
        <Technologies>
          <IconBadge
            icon={<FaAws />}
            color={useColorModeValue('#FF9900', '#FF9900')}
            tooltip="AWS"
          />
          <IconBadge
            icon={<SiArduino />}
            color={useColorModeValue('#00979D', '#00979D')}
            tooltip="Arduino"
          />
          <IconBadge  
            icon={<SiUnity />}
            color={useColorModeValue('#000000', '#000000')}
            tooltip="Unity"
          />
          <IconBadge
            icon={<SiAndroidstudio />}
            color={useColorModeValue('#3DDC84', '#3DDC84')}
            tooltip="Android Studio"
          />
        </Technologies>
      )
    }
  ];
};

export default ComfortsCore;
