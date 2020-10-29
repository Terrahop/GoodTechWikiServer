import { createMuiTheme } from '@material-ui/core/styles'

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#6802bf'
    },
    secondary: {
      main: '#f58a0b'
    },
    error: {
      main: '#fc2803'
    },
    background: {
      default: '#ffffff'
    },
    text: {
      primary: '#000000',
      secondary: '#999999'
    }
  },
  typography: {
    fontFamily: 'Encode Sans Condensed',
    fontSize: 17,
    fontWeightBold: 800,
    fontWeightLight: 200,
    fontWeightMedium: 400,
    fontWeightRegular: 300,
    h4: {
      fontWeight: 700
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920
    }
  }
})

export default theme
