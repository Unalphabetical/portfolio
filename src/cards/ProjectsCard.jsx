import React from 'react';
import {Box, Card, Typography} from '@mui/material';

export default function ProjectsCard() {

    return (
        <Box p={1} sx={{ display: 'flex', flexDirection: 'column', maxWidth: '1000px' }}>
            <Card sx={{ display: 'flex', flexDirection: 'row', width: '100%', height: '100%' }}>
                <Box>
                    <Typography component='div' align='left' sx={{ m: 1.5 }}>
                        <Box sx={{ color: 'text.primary', fontSize: 'h5.fontSize'}}>Projects</Box>
                    </Typography>
                </Box>
            </Card>
        </Box>
    );
}
