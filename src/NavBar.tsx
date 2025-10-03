import "@mantine/core/styles.css";
import { Burger, Text, Drawer, Flex, Group, ScrollArea } from "@mantine/core";
import { useDisclosure } from '@mantine/hooks';
import { Link } from "react-scroll";
import classes from "../src/HoverText.module.css";


export default function NavBar() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const sections = ["About", "Experience", "Skills", "Education", "Contact"];

  return <>
      <Flex
        w="100%"
        align="center"
        justify={{ base: "flex-end", md: "center" }}
        pt={{ base: 24, md: 36}}
        pb={{ base: 24, md: 48 }}
        px={{ base: 36, md: 24 }}
        style={{background: "linear-gradient(to bottom, rgba(0, 104, 182, 0.9), rgba(32, 162, 254, 0))"}}
      >
        <Group visibleFrom="md" justify="space-around" w="100%" maw="1350px">
        {sections.map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              spy={true}
              offset={-70} // adjust for navbar height
            >
               <Text
                  className={classes.hoverText}
                  c="white" 
                  fz={24}
                  style={{
                    position: "relative",
                    display: "inline-block",
                    cursor: "pointer",
                  }}
                >
                  {section}
                </Text>
            </Link>
          ))}
        </Group>
        <Burger
          lineSize={4}
          size={"xl"}
          opened={opened}
          onClick={toggle}
          aria-label="Toggle navigation"
          hiddenFrom="md"
          color="white"
          mih={"40px"}
          styles={{
            burger: {
              zIndex: 2000
            }
          }}
        />
      </Flex>
      <Drawer
        opened={opened}
        onClose={close}
        size="100%"
        padding="md"
        hiddenFrom="md"
        zIndex={1000}
        transitionProps={{
          transition: "slide-left",
          duration: 300,
          timingFunction: "ease",
        }}
        styles={{
          content: {
            backgroundColor: "rgba(0, 104, 182, 0.9)",
            color: "white",
          },
          header: {
            backgroundColor: "rgba(0, 104, 182, 0.9)",
            color: "white",
            display: "none"
          },
        }}
      >
        <ScrollArea h="100%">
          <Flex direction="column" gap="md" align="stretch" mt={"100px"}>
            {sections.map((section) => (
              <Link
                key={section}
                to={section}
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                onClick={close} // closes the drawer
              >
                <Text 
                  c="white" 
                  fz={24}   
                  style={{
                    cursor: "pointer",
                  }}
                >
                  {section}
                </Text>
              </Link>
            ))}
          </Flex>
        </ScrollArea>
      </Drawer>
  </>;
}
