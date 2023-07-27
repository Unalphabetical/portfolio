import * as React from 'react';
import {Box, Card, Grid, Typography} from "@mui/material";

export default function MediaControlCard() {

    return (
        <Box p={1} sx={{ maxWidth: '100vh'}}>
            <Card sx={{ display: 'flex', maxWidth: 1500, maxHeight: 700}}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Grid
                        container
                        spacing={0}
                        alignItems="center"
                        justify="center"
                    >
                        <Typography component="div" align="left">
                            <Box sx={{ fontSize: 'h4.fontSize', m: 2 }}>Hi, I'm Puth.</Box>
                            <Box sx={{ fontSize: 'h4.fontSize', m: 2 }}>A fullstack developer.</Box>
                            <Box sx={{ fontSize: 'h7.fontSize', m: 2 }}>I'm currently learning React alongside software languages like Java</Box>
                            <Box sx={{ fontSize: 'h7.fontSize', m: 2 }}>and studying at California State University, Sacramento as a Computer Science major</Box>
                        </Typography>
                    </Grid>
                </Box>
            </Card>
        </Box>
);
}
