export const projects = [
  {
    title: 'Snake',
    context: 'California State University, Sacramento',
    tags: ['Android (Java)', 'Android Studio', 'Mobile'],
    description:
      'A mobile Snake game built in Android Studio. Features background music, gamepad controls, a leaderboard system, a delete button in case of data corruption, and support for multiple apples.',
    images: [`${import.meta.env.BASE_URL}snake.png`],
    github: 'https://github.com/Unalphabetical',
  },
  {
    title: 'Honkai Star Rail Calculator',
    context: 'HoYoverse - Honkai: Star Rail',
    tags: ['Web', 'Calculator'],
    description:
      'A focused web tool built within a game patch to calculate upcoming Trailblaze levels. Handles automatic calculations for experience, immersifiers, fuels, and refreshes.',
    images: [`${import.meta.env.BASE_URL}honkaistarrailcalculator.png`],
    github: 'https://github.com/Unalphabetical',
  },
  {
    title: 'My/Oracle SQL Builder',
    context: 'California State University, Sacramento',
    tags: ['Java', 'OracleSQL', 'MySQL'],
    description:
      'An application that simplifies the creation of SQL statements — from CREATE to INSERT to DELETE to UPDATE. Started with OracleSQL for Database Management Systems, then expanded to MySQL.',
    images: [
      `${import.meta.env.BASE_URL}mysql.png`,
      `${import.meta.env.BASE_URL}mysql_generated.png`,
    ],
    github: 'https://github.com/Unalphabetical',
  },
];
