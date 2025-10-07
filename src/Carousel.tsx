import { Carousel } from '@mantine/carousel';
import "@mantine/core/styles.css";
import '@mantine/carousel/styles.css';
import { Flex, Stack, Title, Text, AspectRatio, Image, Modal, Button } from '@mantine/core';
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import classes from "./Carousel.module.css"


export function CommunitechCarousel() {
    const isSm = useMediaQuery('(min-width: 768px)');
    const [opened, { open, close }] = useDisclosure(false);
    
  return (
    <Flex w="100%" id="Experience" bg="#e1f8ff" justify="center" pb={16}>
      <Stack w="100%" maw="1350px" p="xl" justify="center" align='center'>
        <Title w="100%" style={{textAlign: "center"}} order={2} fz={48}>Experience</Title>
        <Title w={isSm ? "80%" : "100%"} style={{textAlign: "left"}} order={3} fz={32}>Communitech (2023-Present)</Title>
        <Carousel
          classNames={classes}
          withIndicators 
          bg="#e1f8ff" 
          height="100%"
          controlsOffset="xs"
          controlSize={48}
          w={isSm ? "80%" : "100%"}
        >
          <Carousel.Slide>
            <Stack>
              <Text w="100%" fz="16">My primary focus at Communitech has been the creation of the ElevateIP Portal, a MERN app that allows for 5 different user groups to interact and manage all stages of the program.  The Frontend is built on React and TypeScript to provide a modern and relaible UI/UX, and integrates a number of other external libraries and API's such as Google Maps.  Designs were provided in Figma files and accurately reproduced as dozens of fully functional and responsive pages.</Text>
              <AspectRatio ratio={16 / 9} flex={1}>
                <Image 
                  src="/eip1.png"
                  alt={"A Screenshot of the Elevate IP Portals homepage"}
                />
              </AspectRatio>
            </Stack>
          </Carousel.Slide>
          <Carousel.Slide>
            <Stack>
            <Text w="100%" fz="16">The Backend is built with Node.js and Express.js, and JWT is used for user authentication.  The integrity of the data is ensured through both Frontend and Backend verifictions, and it is securely in a MongoDB database.  There are a myriad of CRUD operations that can be carried out by the various User groups, using proven development and design patterns, to advance or reject the application at the many necessary stages of administration.  Conditionally rendered UI's based on the Backend data ensure an application's status is kept up to date for all user groups, and automated communications based on the actions taken are sent to the relevant users via NodeMailer integration.</Text>
            <AspectRatio ratio={16 / 9} flex={1}>
              <Image 
                src="/eip3.png"
                alt={"A Screenshot of the Elevate IP Portal"}
              />
              </AspectRatio>
            </Stack>
          </Carousel.Slide>
          <Carousel.Slide>
            <Stack>
            <Text w="100%" fz="16">Deployment of the portal, both on the developement and production servers, is handled through a number of Amazon Web Services and triggered via a GitHub Action.  Hosted on an AWS EC2 and utilizing CodePipeline and CodeDeploy ensures seemingless server updates are pushed with no server downtime and no impact on live users.</Text>
            <AspectRatio ratio={16 / 9} flex={1}>
              <Image 
                src="/eip2.png"
                alt={"A Screenshot of the Elevate IP Portal"}
              />
              </AspectRatio>
            </Stack>
          </Carousel.Slide>
        </Carousel>
        <Title w={isSm ? "80%" : "100%"} style={{textAlign: "left"}} order={3} fz={32}>Q4 (2021-2023)</Title>
        <Text w={isSm ? "80%" : "100%"}>At Q4, I helped create modular and modern Investor Relations sites, for clients ranging from those launching an initial public offering, all the way to huge scale companies on the Fortune 500.  Collaborating closely with designers, QA and management in tightly structured Sprints, I produced high quality code in a rapid paced environment, handling multiple ongoing projects and priorities.</Text>
        <Title w={isSm ? "80%" : "100%"} style={{textAlign: "left"}} order={3} fz={32}>SANAS Health (2021)</Title>
        <Text w={isSm ? "80%" : "100%"} pb={16}>With SANAS Health, my first full time contract following graduation from Juno College of Technology, I was responsible for the rebranding and conversion of their Shopify and WordPress sites, using custom theming and PHP to optimize the user experience.  In doing so, I refactored and unified a variety of codebases to ensure uniformity, efficiency and readability across multiple sites, themes and languages.  This, combined with a complete overhaul of their accessibility practices, Google Tag Manager implementation and other SEO optimizations, allowed them to demonstrably increase their SEO and more effectively track and direct ad spending.</Text>
        <Modal opened={opened} onClose={close}>
        <iframe
          src="/Stephen Schooley Resume.pdf"
          style={{ width: '100%', height: '600px', border: 'none' }}
          title="Resume"
        />  
        </Modal>
        <Button size='xl' variant='dark' onClick={open}>
          Check Out My Resume!
        </Button>
      </Stack>
    </Flex>
  );
}