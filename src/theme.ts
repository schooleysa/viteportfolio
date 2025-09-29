import { createTheme, MantineColorsTuple } from "@mantine/core";

const myColor: MantineColorsTuple = [
  '#e1f8ff',
  '#cbedff',
  '#9ad7ff',
  '#64c1ff',
  '#3aaefe',
  '#20a2fe',
  '#099cff',
  '#0088e4',
  '#0079cd',
  '#0068b6'
];

export const theme = createTheme({
  colors: {
    myColor,
  },
  fontFamily: "Raleway"
  // fontSizes: {
  //   xs: '0.5rem',
  //   sm: '0.75rem',
  //   md: '1rem',
  //   lg: '2.5rem',
  //   xl: '5rem',
  // }
}
);
