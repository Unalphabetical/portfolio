import React, { useState } from 'react';
import './App.css';
import ProfileCard from './cards/ProfileCard.jsx';
import ThemeButton from './buttons/ThemeButton.jsx';
import {createTheme, CssBaseline, Grid, ThemeProvider} from '@mui/material';

function App() {

  const [themeMode, setThemeMode] = useState("dark")

  const theme = createTheme({
    palette: {
      mode: themeMode,
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Grid flexGrow={0} sx={{ position: "fixed", top: 0, right: 0, zIndex: 2000 }}>
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
