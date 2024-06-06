import React, { useState } from 'react';
import './App.css';
import ProfileCard from './cards/ProfileCard.jsx';
import ThemeButton from './buttons/ThemeButton.jsx';
import {createTheme, CssBaseline, Grid, ThemeProvider} from '@mui/material';
import ProjectsCard from "./cards/ProjectsCard.jsx";

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
        ? {
          background: {
            default: '#fafafa'
          },
          text: {
            primary: '#0e2014',
            secondary: '#44a266',
            tertiary: '#bbe2c9',
            accent: '#3e935d'
          },
        }
        : {
          background: {
            default: '#050505'
          },
          text: {
            primary: '#dff1e5',
            secondary: '#5dbb80',
            tertiary: '#1d442b',
            accent: '#6cc18b'
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

        <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
          <ProfileCard></ProfileCard>
        </Grid>

        <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <ProjectsCard></ProjectsCard>
        </Grid>

      </ThemeProvider>
    </>
  )
}

export default App
