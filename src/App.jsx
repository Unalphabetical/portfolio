import React from 'react'

import './App.css'
import ProfileCard from "./cards/ProfileCard.jsx";
import {Grid} from "@mui/material";

function App() {

  return (
    <>

      <Grid sx={{display: 'flex'}}>
        <ProfileCard></ProfileCard>
      </Grid>

    </>
  )
}

export default App
