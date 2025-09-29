import { Carousel } from '@mantine/carousel';
import "@mantine/core/styles.css";
import '@mantine/carousel/styles.css';
import { Flex, Stack, Title, Text, AspectRatio, Image, Modal, Button } from '@mantine/core';
import { useDisclosure, useMediaQuery } from "@mantine/hooks";

export function CommunitechCarousel() {
    const isSm = useMediaQuery('(min-width: 768px)');
    const [opened, { open, close }] = useDisclosure(false);
    
  return (
    <Flex w="100%" id="Experience" bg="#e1f8ff" justify="center">
      <Stack w="100%" maw="1350px" p="xl" justify="center" align='center'>
        <Title w="100%" style={{textAlign: "center"}} order={2} fz={48}>Experience</Title>
        <Carousel 
          withIndicators 
          bg="#e1f8ff" 
          height="100%"
          controlsOffset="xs"
          controlSize={40}
          w={isSm ? "80%" : "100%"}
        >
          <Carousel.Slide>
          <Title w={isSm ? "80%" : "100%"} style={{textAlign: "left"}} order={3} fz={32}>Communitech (2023-Present)</Title>
            <Stack>
              <Text w="100%" fz="16">PARARGRAPH 1 lsdkj lsdfkj adkfj aslkdfjh lksadfj laskjdfh laskjdhf lasjdhf lkasjdhf lkjashdfl jahsdlfjk hasdlfkjh alskdjfh laksjdhf lkasjdfh </Text>
              <AspectRatio ratio={16 / 9} flex={1}>
                <Image 
                  src="src/assets/vsCodeBackground.png"
                  alt={""}
                />
              </AspectRatio>
            </Stack>
          </Carousel.Slide>
          <Carousel.Slide>
            <Stack>
            <Text w="100%" fz="16">PARARGRAPH 1 lsdkj lsdfkj adkfj aslkdfjh lksadfj laskjdfh laskjdhf lasjdhf lkasjdhf lkjashdfl jahsdlfjk hasdlfkjh alskdjfh laksjdhf lkasjdfh </Text>
            <AspectRatio ratio={16 / 9} flex={1}>
                <Image 
                  src={""}
                  alt={""}
                />
              </AspectRatio>
            </Stack>
          </Carousel.Slide>
        </Carousel>
        <Modal opened={opened} onClose={close}>
        <iframe
          src="/resume.pdf"
          style={{ width: '100%', height: '600px', border: 'none' }}
          title="Resume"
        />  
        </Modal>
        <Button size='xl' variant='dark' onClick={open}>
          My Resume
        </Button>
      </Stack>
    </Flex>
  );
}