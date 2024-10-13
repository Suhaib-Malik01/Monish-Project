import { Box, Flex, Heading, Image, Img, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import lawFirmImage from '../Docs/law_firm_image.jpeg';

import Criminal1 from '../Docs/Criminal1.jpeg';
import Criminal2 from '../Docs/Criminal2.jpeg';
import Civil1 from '../Docs/Civil1.jpeg';
import Tax1 from '../Docs/Tax1.jpg';
import Family from '../Docs/Family.jpeg';
import NI_ACT from '../Docs/NI_ACT.jpeg';


export default function Cases() {

  const caseData = [
    {image: Criminal1,
      Heading: 'All Types of criminal matter solution'
    },
    {image: Criminal2,
      Heading: 'Criminal law defines individual rights, crimes, defenses, and key elements'
    },
    {image: Civil1,
      Heading: 'Civil Law is a general law which solves disputes between 2 organisations or individuals'
    },
    {image: Tax1,
      Heading: 'Income earned during a year by an individual or a business is categorised into five heads of income and taxed accordingly. Five heads of income are as follows: - Income from salary/pension'
    },
    {image: Family,
      Heading: 'These disputes might involve issues like child custody, division of property, or spousal support'
    },
    {image: NI_ACT,
      Heading: 'Resolution of financial disputes, including issues related to check bounces and bank settlements'
    }

  ];

  return (
    <Box id='cases'>

        {caseData.map((CaseVal, index) => (
          <><Image  src={CaseVal.image}  borderRadius={10} height={600} m={'auto'} mt={20}/>

            <Heading textAlign={'center'} mt={5} size={'md'}>{CaseVal.Heading}</Heading>
          </>
        ))}
      
    </Box>
  )
}
