import { extendTheme, ThemeOverride } from '@chakra-ui/react';
import { fonts } from 'styled/theme/fonts';
import { Input } from 'styled/theme/input';
import { Textarea } from 'styled/theme/textArea';
import { Button } from 'styled/theme/button';

const customTheme: ThemeOverride = {
  fonts,
  components: {
    Input,
    Textarea,
    Button,
  },
};

export const theme = extendTheme(customTheme);
