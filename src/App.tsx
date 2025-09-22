import "@mantine/core/styles.css";
import { Burger, MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import { useDisclosure } from '@mantine/hooks';

export default function App() {
  const [opened, { toggle }] = useDisclosure();

  return <MantineProvider theme={theme}>
    <Burger lineSize={4} opened={opened} onClick={toggle} aria-label="Toggle navigation" />
  </MantineProvider>;
}
