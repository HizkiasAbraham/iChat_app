import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import teal from '@material-ui/core/colors/teal';
import amber from '@material-ui/core/colors/amber'
import Router from './routes/router';

const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: amber,
    tonalOffset: 0.2
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  }
});

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  )
}

export default App;
