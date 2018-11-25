import ProjectModel from '../models/project.model';

export default [
  {
    id: 'geocoder',
    title: 'Geocodificador CABA',
    text: 'App para ubicar intersecciones de CABA, hecho con Angular, Node y Postgis.',
    imgUrl: 'assets/img/geocoder.png',
    projectUrl: 'https://www.geocodificador-caba.online/',
    explanationText: `
      Geocodificador para CABA realizado con Postgis.
    `,
    technologiesUsed: [
      'angular',
      'node',
      'postgresql',
      'postgis'
    ]
  },
  {
    id: 'cards',
    title: 'Memory Cards',
    text: 'Aplicación para estudio, utiliza tarjetas para memorizar conceptos sobre distintos temas.',
    imgUrl: 'assets/img/cards.png',
    projectUrl: 'https://memorycards.netlify.com/',
    explanationText: `
      En esta app se pueden crear temas, y en cada tema se crean tarjetas.
    `,
    technologiesUsed: [
      'angular',
      'express',
      'node',
      'mongodb'
    ]
  }
] as ProjectModel[];
