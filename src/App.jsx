import React, { useState } from 'react';
import './App.css';
import ProfileCard from './cards/ProfileCard.jsx';
import ThemeButton from './buttons/ThemeButton.jsx';
import {createTheme, CssBaseline, Grid, ThemeProvider} from '@mui/material';

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
        ? {
          background: {
            default: '#fafafa'
          },
          text: {
            primary: '#050505',
            secondary: '#c0074e',
            tertiary: '#fdcee0',
            accent: '#f70864'
          },
        }
        : {
          background: {
            default: '#050505'
          },
          text: {
            primary: '#fafafa',
            secondary: '#c0074e',
            tertiary: '#310214',
            accent: '#fa6ba2'
          },
        }),
  },
});

function App() {

  const [themeMode, setThemeMode] = useState('dark')

  const theme = React.useMemo(() => createTheme(getDesignTokens(themeMode)), [themeMode]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Grid flexGrow={0} sx={{ position: 'fixed', top: 0, right: 0, zIndex: 2000 }}>
          <ThemeButton label={themeMode} setTheme={setThemeMode}></ThemeButton>
        </Grid>

        <Grid sx={{display: 'flex'}}>
          <ProfileCard></ProfileCard>
        </Grid>

      </ThemeProvider>
    </>
  )
}

export default App
