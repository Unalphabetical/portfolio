import React, { useState } from 'react';
import {Box, Card, Tab, Tabs, Typography} from '@mui/material';

export default function ProjectsCard() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box p={1} sx={{ display: 'flex', flexDirection: 'column', maxWidth: '1000px' }}>
            <Card sx={{ display: 'flex', flexDirection: 'row', width: '100%', height: '100%' }}>

                <Box>
                    <Typography component='div' align='left' sx={{ m: 1.5 }}>
                        <Box sx={{ color: 'text.primary', fontSize: 'h5.fontSize' }}>Projects</Box>
                    </Typography>
                    <Card sx={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                        <Box sx={{ minWidth: '30%' }}>
                            <Tabs
                                orientation="vertical"
                                variant="scrollable"
                                value={value}
                                onChange={handleChange}
                            >
                                <Tab label="Snake" />
                                <Tab label="Tab 2" />
                            </Tabs>
                        </Box>
                        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            {value === 0 &&
                                <Typography>
                                    Snake game made with Android Studio for mobile during California State University, Sacramento
                                    in one of my Computer Science class: Object-Oriented Computer Graphics Programming.
                                    It features background music, gamepad controls, a leaderboard system, a delete
                                    button incase of data corruption, and multiple apples.
                                </Typography>}
                        {value === 1 && <div>Content for Tab 2</div>}
                        </Box>
                    </Card>
                </Box>
            </Card>
        </Box>
    );
}
