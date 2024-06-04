import * as React from 'react';
import {Box, Card, CardMedia, Grid, Typography} from '@mui/material';
import IconButton from "@mui/material/IconButton";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedIn from "@mui/icons-material/LinkedIn";

export default function ProfileCard() {
  return (

      <Box p={1} sx={{ display: 'flex', flexDirection: 'column', maxWidth: '1000px' }}>
        <Card sx={{ display: 'flex', flexDirection: 'row', width: '100%', height: '100%' }}>

          <Box>
            <Typography component='div' align='left' sx={{ m: 1.5 }}>
              <Grid container sx={{ alignItems: 'left', gap: '0.7rem' }}>
                <Box sx={{ color: 'text.primary', fontSize: 'h5.fontSize'}}>Hi, I'm </Box>
                <Box sx={{ color: 'text.secondary', fontSize: 'h5.fontSize' }}>Puth Vang.</Box>
              </Grid>
              <Box sx={{ color: 'text.secondary', fontSize: 'h5.fontSize' }}>A software and full stack web developer.</Box>
              <Grid>
                <Grid container sx={{ alignItems: 'left', gap: '0.3rem', pt: 1 }}>
                  <Typography sx={{ fontSize: 'h7.fontSize' }}>
                    I'm currently learning <Typography display="inline" sx={{ color: 'text.secondary' }}>React</Typography> alongside software languages like <Typography display="inline" sx={{ color: 'text.secondary' }}>Java </Typography>
                    and studying at <Typography display="inline" sx={{ color: 'text.secondary' }}>California State University, Sacramento</Typography> as a <Typography display="inline" sx={{ color: 'text.secondary'}}>Computer Science major</Typography>.
                  </Typography>
                </Grid>
              </Grid>
            </Typography>
          </Box>

          <Box>
            <CardMedia
                loading='lazy'
                component='img'
                alt='Portrait'
                src='././portrait.jpg'
                sx={{minHeight: 128, minWidth: 128, maxHeight: 256, maxWidth: 256}}
            />
            <Grid style={{ display: 'flex' }}>
              <Box sx={{ m: 1 }}>
                <IconButton>
                  <GitHubIcon onClick={() =>
                      window.open('https://github.com/Unalphabetical/', '_blank')} />
                </IconButton>
                <IconButton>
                  <LinkedIn onClick={() =>
                      window.open('https://www.linkedin.com/in/puthvang/', '_blank')} />
                </IconButton>
              </Box>
            </Grid>
          </Box>

        </Card>
      </Box>

  );
}
