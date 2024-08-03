import { ChakraTheme } from '@chakra-ui/theme';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['cyrillic'], display: 'swap' });

export const fonts: ChakraTheme['fonts'] = {
  body: montserrat.style.fontFamily,
  heading: montserrat.style.fontFamily,
};
