import {Base} from "../parts/base.comp"
import PageHeader from "../parts/page-header.comp"
import {Link as RouterLink} from "react-router-dom"
import {Center, Link, Text} from "@chakra-ui/layout"
import { Box, Image } from "@chakra-ui/react"
import bgImage from '../assets/cultural-exchange-bg-text.svg';
import arrow from '../assets/arrow.svg';
import diaper from '../assets/diaper-image.png';
// import image from '../a'

export function Page() {
  return (
    <Base>
      <PageHeader />
      <Box
        w="100%"
        h="100%"
        // backgroundImage="url('../assets/cultural-exchange-bg-text.svg')"
        backgroundImage="url('../assets/culture-x-logo.svg')"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
      >
        <Image w='100%' src={bgImage} alt={'bg image'} />
        <Center height="500px">
          <Image src={diaper} alt={'arrow'} style={{width: '20%', position: "absolute", marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: 'auto',
            marginBottom: 'auto',
            left: 0,
            top: -100,
            bottom: 0,
            right: 0,
            textAlign: 'center',}} />
          <Link to="/diaper" as={RouterLink} w={'500px'}>
            <Box d="flex" alignItems="center" justifyContent={'space-around'}>
              <Text fontSize="3xl">Our first drop</Text>
              <Image src={arrow} alt={'arrow'} />

            </Box>
          </Link>
        </Center>

      </Box>
    </Base>
  )
}
