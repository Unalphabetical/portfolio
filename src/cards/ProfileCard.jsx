import * as React from 'react';
import {Box, Card, CardMedia, Grid, styled, Typography} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
export default function MediaControlCard() {
  return (
    <>
      <Box p={1} sx={{ maxWidth: '100vh'}}>
        <Card sx={{ display: 'flex', maxWidth: 1500, maxHeight: 700}}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Grid
              container
              spacing={0}
              alignItems='center'
              justify='center'
            >
              <Typography component='div' align='left' sx={{ m: 2 }}>
                <Grid container sx={{ alignItems: 'left', gap: '0.7rem' }}>
                  <Box sx={{ color: 'text.primary', fontSize: 'h4.fontSize'}}>Hi, I'm </Box>
                  <Box sx={{ color: 'text.secondary', fontSize: 'h4.fontSize' }}>Puth.</Box>
                </Grid>
                <Box sx={{ color: 'text.secondary', fontSize: 'h4.fontSize' }}>A fullstack developer.</Box>
                <Grid>
                  <Grid container sx={{ alignItems: 'left', gap: '0.3rem', pt: 1 }}>
                    <Typography sx={{ fontSize: 'h7.fontSize' }}>
                      I'm currently learning <Typography display="inline" sx={{ color: 'text.secondary' }}>React</Typography> alongside software languages like <Typography display="inline" sx={{ color: 'text.secondary' }}>Java</Typography>
                    </Typography>
                    <Typography sx={{ fontSize: 'h7.fontSize' }}>
                      and studying at <Typography display="inline" sx={{ color: 'text.secondary' }}>California State University, Sacramento</Typography> as a <Typography display="inline" sx={{ color: 'text.secondary'}}>Computer Science major</Typography>.
                    </Typography>
                  </Grid>
                </Grid>
              </Typography>
            </Grid>
          </Box>
          <Grid>
            <CardMedia
              component='img'
              alt='Portrait'
              src='././portrait.png'
              sx={{minWidth: 150, minHeight: 200, maxHeight: 500}}
            />
            <Grid style={{ display: 'flex' }}>
              <Box sx={{ m: 1 }}>
                <IconButton>
                  <GitHubIcon onClick={() =>
                    window.open('https://github.com/Unalphabetical/', '_blank')} />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </Card>
      </Box>
    </>
  );
}
