import ProjectModel from '../models/project.model';

export default [
  {
    id: 'geocoder',
    title: 'Geocodificador CABA',
    text: 'App para ubicar intersecciones de CABA, hecho con Angular, Node y Postgis.',
    imgUrl: 'assets/img/geocoder.png',
    projectUrl: 'https://www.geocodificador-caba.online/',
    explanationText: `
      Geocoder para CABA realizado a través de funciones geográficas provistas
      por Postgis. Actualmente pueden buscarse en la aplicación solo intersecciones,
      pero próximamente voy a implementar también la búsqueda por altura.\n
      El deployment del backend y la base de datos está hecho mediante docker, en tanto que el frontend
      se encuentra alojado en Netlify.
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
    text: 'Aplicación para estudio, utiliza tarjetas para memorizar conceptos sobre distintos temas.',
    imgUrl: 'assets/img/cards.png',
    projectUrl: 'https://memorycards.netlify.com/',
    explanationText: `
      En esta app se pueden crear tarjetas divididas por temas, para luego pasarlas una a una e ir
      memorizándolas. Las tarjetas tienen un frente, donde se puede especificar una pregunta, y un dorso 
      donde escribir la respuesta. Asimismo se cuenta con la posibilidad de indicarle al sistema si
      el usuario acertó o no, dato que es utilizado por el backend para reordenar las tarjetas de acuerdo
      a la cantidad veces que fueron contestadas correctamente. De este modo el sistema muestra mas veces 
      las preguntas menos acertadas.\n
      El deployment del backend y la base de datos está hecho mediante docker, en tanto que el frontend
      se encuentra alojado en Netlify.
    `,
    technologiesUsed: [
      'angular',
      'express',
      'node',
      'mongodb',
      'docker'
    ]
  }
] as ProjectModel[];
