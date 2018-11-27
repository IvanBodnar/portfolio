import JobModel from '../models/job.model';


export default [
  {
    id: 'observatorio',
    title: 'Observatorio de Seguridad Vial CABA',
    description: 'Descripción',
    competences: [
      'Mantenimiento de bases de datos',
      'Procesamiento de datos',
      'Tareas de geoprocesamiento'
    ]
  },
  {
    id: 'anachronics',
    title: 'Anachronics SRL',
    description: 'Description',
    competences: [
      'Desarrollo backend en general',
      'Delineamiento de proyectos con clientes',
      'Desarrollo de features requeridas por el cliente'
    ]
  }
] as JobModel[];
