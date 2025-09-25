import "@mantine/core/styles.css";
import '@mantine/carousel/styles.css';

import { Flex, Text, MantineProvider, Stack, Image, Title } from "@mantine/core";
import { theme } from "./theme";
import NavBar from "./NavBar";
import { useMediaQuery } from "@mantine/hooks";
import { CommunitechCarousel } from "./Carousel";

export default function App() {
  const isSm = useMediaQuery('(min-width: 768px)');
  console.log(isSm)
  return <MantineProvider theme={theme}>
    <Flex id="Home"
      w="100%"
      style={{
        height: isSm ? "100vh" : "fit-content",
        maxHeight: "750px",
        backgroundImage: `url('src/assets/vsCodeBackground.png')`,
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
              src="src/assets/Headshot.png"
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
    <Flex w="100%" id="About" bg="#0079cd" justify="center">
      <Stack w="100%" maw="1350px" p="xl" c="white" justify="center">
        <Title w="100%" style={{textAlign: "center"}} order={2} fz={48}>About Me</Title>
        <Text fz={"24px"}>sdfjskdfhsdkjfhksdjhf</Text>
        <Text fz={"24px"}>kd jhskdfjh ksdjhf ksjdhf jsagdjf hsdakfjh aksdjfg jahsdgf kajsdhf kasjdhf kjasghdfj adhs</Text>
        <Text fz={"24px"}>dasfdsf dfs jhdsf kjhadsif haisduf iasdfg hasdgf asdgfiasgdkfhcgasdkhfgc kasdhg fkashefgd ksdhgf kadhsfg s</Text>
      </Stack>
    </Flex>
    <CommunitechCarousel />
    <Flex w="100%" id="Skills" bg="#0068b6" justify="center">
      <Stack w="100%" maw="1350px" p="xl" c="white" justify="center">
        <Title w="100%" style={{textAlign: "center"}} order={2} fz={48}>Skills</Title>
        <Text fz={"24px"}>sdfjskdfhsdkjfhksdjhf</Text>
        <Text fz={"24px"}>kd jhskdfjh ksdjhf ksjdhf jsagdjf hsdakfjh aksdjfg jahsdgf kajsdhf kasjdhf kjasghdfj adhs</Text>
        <Text fz={"24px"}>dasfdsf dfs jhdsf kjhadsif haisduf iasdfg hasdgf asdgfiasgdkfhcgasdkhfgc kasdhg fkashefgd ksdhgf kadhsfg s</Text>
      </Stack>
    </Flex>
    <Flex w="100%" id="Education" bg="#cbedff" justify="center">
      <Stack w="100%" maw="1350px" p="xl" justify="center">
        <Title w="100%" style={{textAlign: "center"}} order={2} fz={48}>Education</Title>
        <Text fz={"24px"}>sdfjskdfhsdkjfhksdjhf</Text>
        <Text fz={"24px"}>kd jhskdfjh ksdjhf ksjdhf jsagdjf hsdakfjh aksdjfg jahsdgf kajsdhf kasjdhf kjasghdfj adhs</Text>
        <Text fz={"24px"}>dasfdsf dfs jhdsf kjhadsif haisduf iasdfg hasdgf asdgfiasgdkfhcgasdkhfgc kasdhg fkashefgd ksdhgf kadhsfg s</Text>
      </Stack>
    </Flex>
    <Flex w="100%" id="Contact" bg="#0079cd" justify="center">
      <Stack w="100%" maw="1350px" p="xl" c="white" justify="center">
        <Title w="100%" style={{textAlign: "center"}} order={2} fz={48}>Contact</Title>
        <Text fz={"24px"}>sdfjskdfhsdkjfhksdjhf</Text>
        <Text fz={"24px"}>kd jhskdfjh ksdjhf ksjdhf jsagdjf hsdakfjh aksdjfg jahsdgf kajsdhf kasjdhf kjasghdfj adhs</Text>
        <Text fz={"24px"}>dasfdsf dfs jhdsf kjhadsif haisduf iasdfg hasdgf asdgfiasgdkfhcgasdkhfgc kasdhg fkashefgd ksdhgf kadhsfg s</Text>
      </Stack>
    </Flex>
  </MantineProvider>;
}
