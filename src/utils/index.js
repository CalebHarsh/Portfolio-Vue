const portfolioProjects = [
  {
    title: 'Gush',
    info: "The things I've done for gush",
    image: "../assets/images/",
    techUsed: [
      'React.js',
      'Redux.js',
      'SCSS',
      'JavaScript',
      'SEO',
      'JIRA',
      'GIT'
    ],
    link: 'https://gush.com',
    notable: true
  },
  {
    title: 'momento',
    info: "The things I've done for momento",
    image: "momentoImage",
    techUsed: [
      'React.js',
      'Ant Design',
      'CSS',
      'JavaScript',
      'MongoDB',
      'NekoDB',
      'Passport.js',
      'Express.js',
      'Node.js',
      'S3 Bucket'
    ],
    link: 'https://momento-sp.herokuapp.com/',
    notable: true,
  },
  {
    title: 'ShowTracker App',
    info: "The things I've done for gush",
    image: "../assets/images/watchlist.png",
    techUsed: [
      'CSS3',
      'HTML5',
      'JavaScript',
      'Firebase',
      'Bootstrap',
      'Heroku',
      'Node.js',
      'Express.js'
    ],
    link: 'https://calebharsh.github.io/ShowTracker-App/',
    notable: true
  },
  {
    title: 'Trivia Game',
    info: "The things I've done for gush",
    image: "../assets/images/Trivia.png",
    techUsed: [
      'Javascript',
      'jQuery',
      'HTML',
      'Bootstrap',
      'Firebase'
    ],
    link: 'https://calebharsh.github.io/Trivia-game/advance/',
    notable: true,
  },
  {
    title: 'PolitVue',
    info: "The things I've done for gush",
    image: "gushImage",
    techUsed: [
      'Javascript',
      'SASS',
      'HTML',
      'Vue.js',
      'Google API',
      'Node.js',
      'Express.js',
      'MySQL',
      'Sequelize'
    ],
    link: 'https://politivue.herokuapp.com/',
    notable: true
  },
  {
    title: 'Event Planner',
    info: "The things I've done for gush",
    image: "../assets/images/Event_Planner.png",
    techUsed: [
      'Javascript',
      'jQuery',
      'CSS',
      'HTML',
      'Bootstrap'
    ],
    link: 'https://event-planner-54834.firebaseapp.com',
    notable: false
  },
  {
    title: 'Hangman',
    info: "The things I've done for gush",
    image: "../assets/images/Hangman.png",
    techUsed: [
      'Javascipt',
      'CSS',
      'HTML'
    ],
    link: 'https://calebharsh.github.io/Hangman-Game',
    notable: false
  },
  {
    title: 'Avengers Vs. Guardians',
    info: "The things I've done for gush",
    image: "../assets/images/RPG.png",
    techUsed: [
      'Javascript',
      'CSS',
      'HTML',
      'jQuery'
    ],
    link: 'https://calebharsh.github.io/Games/RPG-game',
    notable: false
  },
  {
    title: 'Giphy Search',
    info: "The things I've done for gush",
    image: "../assets/images/gifs.png",
    techUsed: [
      'Bootstrap',
      'jQuery',
      'Javascript',
      'HTML',
      'AJAX'
    ],
    link: 'https://calebharsh.github.io/API-Website',
    notable: false
  },
  {
    title: 'Friend Finder',
    info: "The things I've done for gush",
    image: "../assets/images/FriendFinder.png",
    techUsed: [
      'Bootstrap',
      'Node.js',
      'Express.js',
      'Javascript'
    ],
    link: 'https://stark-thicket-46163.herokuapp.com',
    notable: false
  },
  {
    title: 'Hangman Terminal',
    info: "The things I've done for gush",
    image: "../assets/images/hangman-node-app.png",
    techUsed: [
      'Node.js',
      'Express.js',
      'Javascript'
    ],
    link: 'https://github.com/CalebHarsh/hangman-app',
    notable: false
  },
  {
    title: 'Liri',
    info: "The things I've done for gush",
    image: "../assets/images/liri-node-app.png",
    techUsed: [
      'Node.js',
      'Express.js',
      'Javascript'
    ],
    link: 'https://github.com/CalebHarsh/liri-node-app',
    notable: false
  }
  
];

export const portfolio = [portfolioProjects.reduce((accum, curr) => {
  if (curr.notable) accum.notable.push(curr.title);
  else accum.others.push(curr.title);
  return accum;
}, {
    notable: [],
    others: []
  }), ...portfolioProjects];

export const about = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate debitis ut esse neque quae autem quos reiciendis dolor aspernatur modi error omnis earum ex culpa ea rerum, nostrum illum dolores.
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate debitis ut esse neque quae autem quos reiciendis dolor aspernatur modi error omnis earum ex culpa ea rerum, nostrum illum dolores.
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate debitis ut esse neque quae autem quos reiciendis dolor aspernatur modi error omnis earum ex culpa ea rerum, nostrum illum dolores.
`

export const skills = [
  'Javascript',
  'CSS3',
  'HTML5',
  'JSON',
  'jQuery',
  'MERN Stack',
  'CSS Animation',
  'Bootstrap',
  'Materialize',
  'Ant Design',
  'React.js',
  'Redux',
  'Express.js',
  'Node.js',
  'Vue.js',
  'MongoDB',
  'MySQL',
  'Mongoose',
  'Passport',
  'Sequelize',
  'Webpack',
  'Docker',
  'S3 Bucket',
  'Java',
  'C#',
  'C',
  'Ladder Logic'
];
