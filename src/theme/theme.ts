import { extendTheme, ThemeConfig } from '@chakra-ui/react'

const global = {
  'html, body, *': {
    margin: 0,
    padding: 0,
  },
  body: {
    transition: 'all 500ms ease-in',
  },
}

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const fonts = {
  body: '\'Rubik\', sans-serif',
}

const colors = {
  gray: {
    50: '#FFFFFF',
    100: '#F5F6FA',
    200: '#CACACE',
    300: '#B0B0B6',
    400: '#95969D',
    500: '#7B7B85',
    600: '#61616D',
    700: '#1c1f3e',
    800: '#161831',
    900: '#121324',
  },
}

const components = {
  Button: {
    baseStyle: {
      fontWeight: 'bold',
    },
    sizes: {
      xl: {
        h: '56px',
        fontSize: 'lg',
        px: '32px',
      },
    },
    variants: {
      'with-shadow': {
        bg: 'red.400',
        boxShadow: '0 0 2px 2px #efdfde',
      },
      sm: {
        bg: 'teal.500',
        fontSize: 'md',
      },
    },
    defaultProps: {
      size: 'lg',
      variant: 'sm',
      colorScheme: 'green',
    },
  },
  Link: {
    baseStyle: {
      color: 'blue.400',
    },
  },
  FormLabel: {
    baseStyle: {
      color: 'gray.500',
    },
  },
  Heading: {
    baseStyle: {
      fontWeight: 'normal',
    },
  },
}

const theme = extendTheme({
  global,
  config,
  fonts,
  colors,
  components,
})

export default theme
