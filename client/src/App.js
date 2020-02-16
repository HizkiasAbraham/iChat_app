import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import indigo from '@material-ui/core/colors/indigo';
import pink from '@material-ui/core/colors/pink';
import Grid from '@material-ui/core/Grid';
import Router from './routes/router';

const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: pink,
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
      <Grid container>
        <Grid
          xs={12}
          md={2}
          item
        >
        </Grid>

        <Grid 
          xs={12}
          md={8}
          item
        >
          <Router />
        </Grid>

      </Grid>
    </ThemeProvider>
  )
}

export default App;
