import ProjectModel from '../models/project.model';

export default [
  {
    id: 'geocoder',
    title: 'CABA geocoder',
    text: 'App that finds intersections of CABA, made with Angular, Node and Postgis.',
    imgUrl: 'assets/img/geocoder.png',
    projectUrl: 'https://www.geocodificador-caba.online/',
    explanationText: `
      Autonomous City of Buenos Aires Geocoder, made with geographic functions provided
      by Postgis. Currently searches can only be made by intersection,
      but soon search by street number will also be implemented.\n
      The Database and backend deployment are made through Docker, while the frontend
      is hosted on Netlify.
    `,
    technologiesUsed: [
      'angular',
      'node',
      'postgresql',
      'postgis',
      'docker'
    ]
  },
  {
    id: 'cards',
    title: 'Memory Cards',
    text: 'Study app, uses cards to memorize concepts about different subjects.',
    imgUrl: 'assets/img/cards.png',
    projectUrl: 'https://memorycards.netlify.com/',
    explanationText: `
      On this app theme grouped cards can be created, so then can be memorized by sifting
      through them. Cards have a front, where a question can be specified, and a backside
      where the answer can be written. There's also the chance to indicate the system if
      the user answered correctly or not, data that is used by the backend to reorder the cards according
      the number of times that each question was correctly answered. This way, the system shows more frequently
      the questions that have been answered incorrectly a greater number of times.\n
      The Database and backend deployment are made through Docker, while the frontend
      is hosted on Netlify.
    `,
    technologiesUsed: [
      'angular',
      'express',
      'node',
      'mongodb',
      'docker'
    ]
  },
  {
    id: 'favogit',
    title: 'FavoGit',
    text: 'App to visualize GitHub profiles.',
    imgUrl: 'assets/img/favogit.png',
    projectUrl: 'https://favogit.netlify.com/',
    explanationText: `
      This app is able to search GitHub profiles, sort them in ascending or descending order,
      and store them as favorites.
    `,
    technologiesUsed: [
      'angular'
    ]
  },
  {
    id: 'randuser',
    title: 'RandUser',
    text: 'Simple app for Random User api profiles visualization.',
    imgUrl: 'assets/img/randuser.png',
    projectUrl: 'https://randuser.netlify.com/',
    explanationText: `
      This app loads 20 Random User profiles. These profiles can be filtered by name or last name,
      and profile details can be seen by clicking on any profile of the list.
    `,
    technologiesUsed: [
      'angular'
    ]
  }
] as ProjectModel[];
