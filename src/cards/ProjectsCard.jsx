import React, { useState } from 'react';
import {Box, Card, Grid, Tab, Tabs, Typography} from '@mui/material';

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
                                <Tab label="Honkai Star Rail Calculator" />
                                <Tab label="My/Oracle SQL Builder" />
                            </Tabs>
                        </Box>
                        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            {value === 0 &&
                                <Grid>
                                    <Typography>
                                        Snake game made with Android Studio for mobile during California State University, Sacramento
                                        in one of my Computer Science class: Object-Oriented Computer Graphics Programming.
                                        It features background music, gamepad controls, a leaderboard system, a delete
                                        button in case of data corruption, and multiple apples.
                                    </Typography>
                                    <Box
                                        component="img"
                                        sx={{
                                            loading: 'lazy',
                                            height: '100%',
                                            width: '95%',
                                            minHeight: '100%',
                                            minWidth: '40%',
                                            padding: '16px 0'
                                        }}
                                        alt="Main menu of the Snake game"
                                        src="snake.png"
                                    />
                                </Grid>
                            }
                            {value === 1 &&
                                <Grid>
                                    <Typography>
                                        A simple website that was made for the HoYoverse Game: Honkai Star Rail.
                                        It served one purpose and was made within the patch to calculate the upcoming Trailblaze levels
                                        when everyone was low on levels. It features automatic calculations for the experience, immersifiers,
                                        fuels, and refreshes. It does not count in experience from outside sources such as events, quests, or character quests
                                        as those varies in experience and will take a while to gather data and calculate.
                                    </Typography>
                                    <Box
                                        component="img"
                                        sx={{
                                            loading: 'lazy',
                                            height: '100%',
                                            width: '95%',
                                            minHeight: '100%',
                                            minWidth: '40%',
                                            padding: '16px 0'
                                        }}
                                        alt="Main page of the calculator"
                                        src="honkaistarrailcalculator.png"
                                    />
                                </Grid>
                            }
                            {value === 2 &&
                                <Grid>
                                    <Typography>
                                        An application made at California State University, Sacramento in one of my
                                        Computer Science class: Database Management Systems. It was made to simplify
                                        the creation of OracleSQL statements at first, from CREATE to INSERT to DELETE to UPDATE and more.
                                        Eventually was expanded to MySQL because of another database class: Advanced Database Management Systems.
                                        Now it includes both OracleSQL and MySQL. Soon to include MicrosoftSQL whenever I have time.
                                    </Typography>
                                    <Box
                                        component="img"
                                        sx={{
                                            loading: 'lazy',
                                            height: '100%',
                                            width: '95%',
                                            minHeight: '100%',
                                            minWidth: '40%',
                                            padding: '16px 0'
                                        }}
                                        alt="Java code for the statement"
                                        src="mysql.png"
                                    />
                                    <Box
                                        component="img"
                                        sx={{
                                            loading: 'lazy',
                                            height: '100%',
                                            width: '95%',
                                            minHeight: '100%',
                                            minWidth: '40%',
                                            padding: '16px 0'
                                        }}
                                        alt="Generated SQL from the statement"
                                        src="mysql_generated.png"
                                    />
                                </Grid>
                            }
                        </Box>
                    </Card>
                </Box>
            </Card>
        </Box>
    );
}
