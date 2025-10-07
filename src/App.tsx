import "@mantine/core/styles.css";
import '@mantine/carousel/styles.css';

import { Flex, Text, MantineProvider, Stack, Image, Title, Anchor } from "@mantine/core";
import { theme } from "./theme";
import NavBar from "./NavBar";
import { useMediaQuery } from "@mantine/hooks";
import { CommunitechCarousel } from "./Carousel";
import SkillsAccordion from "../public/Accordion";

export default function App() {
  const isSm = useMediaQuery('(min-width: 768px)');
  console.log(isSm)
  return <MantineProvider theme={theme}>
    <Flex id="Home"
      w="100%"
      style={{
        height: isSm ? "100vh" : "fit-content",
        maxHeight: "750px",
        backgroundImage: `url('/vsCodeBackground.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      align="center"
      justify="flex-start"
      direction="column"
    >
      <NavBar />
        <Flex 
          h={isSm ? "11ß0%" : "fit-content%"}
          w="100%"
          p="xl"
          justify="flex-start"
          align={"center"}
          direction={{base: "column", sm: "row"}}
          flex={1} 
          gap={isSm ? 60 : 16}
          maw="1350px"
        >
          <div style={{borderRadius: "100%", height: "fit-content", width: "fit-content", background: "white", }}>
            <Image
              radius="100%"
              src="/Headshot.png"
              pos="relative"
              alt="Stephen Schooley headshot"
              left={{base: 0, sm: 20}}
              top={{base: 0, sm: 20}}
            />
          </div>
          <Stack 
            gap={isSm ? 0 : 2}
            c="white"
            w="100%"
            flex={1} 
            justify="justify-start"
            align={isSm ? "justify-start" : "center" }
          >
            <Title style={isSm ? {} : {textAlign: "center"}} order={1} fz={{ base: 36, xs: 48, sm: 80 }}>Stephen Schooley</Title>
            <Title style={isSm ? {} : {textAlign: "center"}} order={3} fz={{ base: 24, xs: 36, sm: 60 }}>Full Stack Web Developer</Title>
          </Stack>
      </Flex>
    </Flex>
    <Flex w="100%" id="About" bg="#0079cd" justify="center" pb={16}>
      <Stack w="100%" maw="1350px" p="xl" c="white" justify="center">
        <Title w="100%" style={{textAlign: "center"}} order={2} fz={48}>About Me</Title>
        <Text fz={18}>Hello and welcome to my site!  I am an ambitious and energetic Full Stack Web Developer, from Kitchener, Ontario.  I am passionate about creating data driven solutions to emerging challenges, in the form of dependably functional, accessible and intuitive pieces of software.  I value every part of the development process, from research and design to deployment and maintenance.  I am a continuous and constant learner, fuelled by a deep desire to stay on the cutting edge of emerging technologies, and deliver the best possible experience to clients and users alike.</Text>
        <Text fz={18}>My journey with Web Development began in earnest, during the COVID-19 pandemic, when like so many others, the way I lived and worked changed forever.  After years of interest, I suddenly found myself with the time to immerse myself in Web Development education, and on the advice of some dear friends in the industry, enrolled in the Front End Web Development Program at Juno College of Technology.  Shortly after graduating, I began my first full time job as a Front End Developer.  My desire to take ownership over more and more of the development cycle lead me to expand my learnings into database and server-side architecture, before ultimately taking a role as a Full Stack Developer with Communitech in 2023.</Text>
        <Text fz={18}>I have greatly benefited from the experience with Communitech, working primarily on tools for the administration of the federally funded ElevateIP Program, which provides vital financial and educational support to growing Canadian companies as they seek to protect their Intellectual Property.  I have worked in truly every facet of the development, from participating in user research along with the UX/UI Designers, to ensuring the clean and efficient collection, storage and utilization of user data, to the deployment of the site, which allowed me the oppourtunity to further grow my capacities with DevOps and AWS.  I have cherished this chance to see the real world impact of a clean and flexible User Interface leading to thousands of applications, providing clean data for insights into the tech eco-system and facilitate the delivery of millions of dollars worth of funding.</Text>
        <Text fz={18}>I seek to utilize all the skills I have aquired on my journey so far, and all the skills I continue to pursue, in order to continue to make similar impacts in new and exciting projects!</Text>
      </Stack>
    </Flex>
    <CommunitechCarousel />
    <Flex w="100%" id="Skills" bg="#0079cd" justify="center" pb={16}>
      <Stack w="100%" maw="1350px" p="xl" c="white" justify="center">
        <Title w="100%" style={{textAlign: "center"}} order={2} fz={48}>Skills</Title>
        <SkillsAccordion />
      </Stack>
    </Flex>
    <Flex w="100%" id="Education" bg="#cbedff" justify="center" pb={16}>
      <Stack w="100%" maw="1350px" p="xl" justify="center">
        <Title w="100%" style={{textAlign: "center"}} order={2} fz={48}>Education</Title>
        <Text fz={"24px"}><b>Bachelor of Music</b> - Wilfrid Laurier University (2012-2016)</Text>
        <Text fz={"24px"}><b>Web Development Certificate</b> - Juno College of Technology (2021)</Text>
      </Stack>
    </Flex>
    <Flex w="100%" id="Contact" bg="#0079cd" justify="center" pb={16}>
      <Stack w="100%" maw="1350px" p="xl" c="white" justify="center" align="center" gap={32}>
        {/* <Title w="100%" style={{textAlign: "center"}} order={2} fz={48}>Contact</Title> */}
        <Text fz={"24px"}>Have an idea you want to see brought to life?  Let's Chat!</Text>
        <Flex w={isSm ? "50%" : "100%"} justify={"space-between"} >
          <Flex w={"25%"} justify={"center"}>
            <Anchor href="https://www.linkedin.com/in/stephen-schooley-6b84b4208/" target="_blank" c={"white"} style={{display: "inline-flex", gap: "8px", alignItems: "center", justifyContent: "center"}}>
              <Image 
                w={"50px"}  
                h={"50px"} 
                src="/linkedin.png"
                alt={"LinkedIn Logo"}
              />
              {/* <Text>My LinkedIn</Text> */}
            </Anchor>
          </Flex>
          <Flex w={"25%"}>
            <Anchor href="https://github.com/schooleysa" target="_blank" c={"white"} w={"100%"} style={{display: "inline-flex", gap: "8px", alignItems: "center", justifyContent: "center"}}>
              <Image
                w={"50px"}  
                h={"50px"}              
                src="/github.png"
                alt={"Github Logo"}
              />
              {/* <Text>My GitHub</Text> */}
            </Anchor>
          </Flex>
          <Flex w={"25%"}>
            <Anchor href="mailto:schooley.sa@gmail.com" c={"white"} w={"100%"} style={{display: "inline-flex", gap: "8px", alignItems: "center", justifyContent: "center"}}>
              <Image 
                w={"50px"}  
                h={"50px"}
                src="/email.png"
                alt={"Email Icon"}
              />
              {/* <Text>schooley.sa@gmail.com</Text> */}
            </Anchor>
          </Flex>
          <Flex w={"25%"}>
            <Anchor href="tel:2263418098" c={"white"} w={"100%"} style={{display: "inline-flex", gap: "8px", alignItems: "center", justifyContent: "center"}}>
              <Image 
                w={"50px"}  
                h={"50px"}
                src="/phone.png"
                alt={"Phone Icon"}
              />
              {/* <Text>+1 226 341 8098</Text> */}
            </Anchor>
          </Flex>
        </Flex>
      </Stack>
    </Flex>
  </MantineProvider>;
}
