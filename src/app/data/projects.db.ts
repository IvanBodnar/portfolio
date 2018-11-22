import ProjectModel from '../models/project.model';

export default [
  {
    id: 'geocoder',
    title: 'Geocodificador CABA',
    text: 'App para ubicar intersecciones de CABA, hecho con Angular, Node y Postgis.',
    imgUrl: 'assets/img/geocoder1.png',
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
  }
] as ProjectModel[];
