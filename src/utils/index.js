const portfolioProjects = [
  {
    title: 'Gush',
    info: "Gush provides users with events that are tailored to specificly to the users tastes and likes. As the Junior Web Developer, I was responsible for all Front End display changes that needed to be applied and embedded them into the application. Tasks such as: implementing the designs created by the design team, managing my tasks through JIRA, and morning progress reports, were included in my duties. Major accomplishments were creating an auto complete search feature, managing multiple elements CSS animations, and added new pages and a 404 fallback page.",
    image: "https://momento-139.s3.us-west-1.amazonaws.com/1562344977735.png",
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
    info: "A micro social network that allows users to share pictures and albums with close friends and family. I work as Project Lead and Backend Developer. I created the database layout and set up the routing for all backend calls, I also provided support to all other members on my team in all areas of the application. Major accomplishments: setting S3 bucket to host photos, creating the entire database stucture, and using Ant Designs.",
    image: "https://momento-139.s3.us-west-1.amazonaws.com/1562344750099.png",
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
    info: "The ShowTracker lets user manually keep track of shows and movies they've watched or planned on watching. This was a solo project I took on to organize the shows I was in the middle of watching. The backend is made with Firebase and Node.js.The frontend uses Bootstrap and jQuery. Major accomplishments: a recommendations sections that allows users to share favorite shows between other users, using HTML to create, add, and manipulate the HTML document, and a complex database to store api request.",
    image: "https://momento-139.s3.us-west-1.amazonaws.com/1560562734478.png",
    techUsed: [
      'CSS3',
      'HTML5',
      'JavaScript',
      'Firebase',
      'Bootstrap',
      'Node.js',
      'Express.js',
      'Font Awesome'
    ],
    link: 'https://calebharsh.github.io/ShowTracker-App/',
    notable: true
  },
  {
    title: 'Trivia Game',
    info: "A 10 question Trivia game that pulls questions from an api resource. A strickly front-end application that uses api calls to fetch questions for a multiple of categories.",
    image: "https://momento-139.s3.us-west-1.amazonaws.com/1560562969760.png",
    techUsed: [
      'Javascript',
      'jQuery',
      'HTML',
      'Bootstrap'
    ],
    link: 'https://calebharsh.github.io/Trivia-game/advance/',
    notable: true,
  },
  {
    title: 'PolitVue',
    info: "An application that provides users their political representives based on their zip code. Worked with google'd APIs and a database to store uses. Provided assistance to any Vue.js problems faced by my team.",
    image: "https://momento-139.s3.us-west-1.amazonaws.com/1562345131981.png",
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
    info: "A one stop shop for planning and saving events. Allows users to see restuarants from Yelp and events from Eventbrite from a given zip code. Connects to Firebase to save users, events, and uses bootstrap and CSS to style the site. ",
    image: "https://momento-139.s3.us-west-1.amazonaws.com/1560562929210.png",
    techUsed: [
      'Javascript',
      'jQuery',
      'CSS',
      'HTML',
      'Bootstrap',
      'Firebase',
      'Font Awesome'
    ],
    link: 'https://event-planner-54834.firebaseapp.com',
    notable: false
  },
  {
    title: 'Hangman',
    info: "A simple application for a western themed hangman game. Taught the basics of HTML, CSS, and Javascript.",
    image: "https://momento-139.s3.us-west-1.amazonaws.com/1560563009617.png",
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
    info: "A RPG game that pits Guardian of the Galaxy vs the Avengers. The application uses jQuery to manipulate the HTML and Javascript logic to handle whether you win or lose.",
    image: "https://momento-139.s3.us-west-1.amazonaws.com/1560562946599.png",
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
    info: "A site to search for gifs by searching through the gify api. A clean design and layout made with bootstrap and a list of a few common, funny suggestions at the top.",
    image: "https://momento-139.s3.us-west-1.amazonaws.com/1560563022726.png",
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
    info: "Friend Finder matches you with another user that closes matches your tastes and hobbies allowing for an easy friendship. Created as a way to test match making mechanics.",
    image: "https://momento-139.s3.us-west-1.amazonaws.com/1560562908187.png",
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
    info: "Similiar to the Hangman front-end this provides simple Node.js application. Using the terminal to play hangman man with out the need for a browser.",
    image: "https://momento-139.s3.us-west-1.amazonaws.com/1560563052098.png",
    techUsed: [
      'Node.js',
      'Javascript'
    ],
    link: 'https://github.com/CalebHarsh/hangman-app',
    notable: false
  },
  {
    title: 'LIRI',
    info: "A mock SIRI program that grabs twitter posts, spotify songs, and provide movie details. A node application that handles multiple API calls from different API sources.",
    image: "https://momento-139.s3.us-west-1.amazonaws.com/1560562987789.png",
    techUsed: [
      'Node.js',
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

export const about = `I am a recent resident to Chicago and a Full Stack Developer that specializes in Front End Development. I spend most of my free time reading and playing games. New to the city and I am already in love with it. I've been to multiple meet-ups and am still ever expanding my circle of friends. I love coding and continue learning the amazing things you can do with it, with the right set of skills and tools. I was drawn to programming through video games and hope to one day program my own games. I am trained in MERN Stack and graduated from a Full Stack Boot Camp in Arizona. I enjoy helping people and challenging myself with difficult problems that could prove useful in the future.`

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
