import JobModel from '../models/job.model';


export default [
  {
    id: 'observatorio',
    title: 'Observatorio de Seguridad Vial CABA',
    description: `
      En el Observatorio de Seguridad Vial me desempeñé como administrador de
      bases de datos (Postgres), desarrollador y analista de datos geográficos. Desarrollé varias
      aplicaciones, tanto de escritorio como web, usando PyQt y Django.
    `,
    competences: [
      'Mantenimiento de bases de datos',
      'Procesamiento de datos',
      'Tareas de geoprocesamiento con Postgis, Arcgis y Qgis'
    ]
  },
  {
    id: 'anachronics',
    title: 'Anachronics SRL',
    description: `
      En Anachronics SRL me desempeñé como desarrollador backend, programando en plpgsql
      y SQL.\n
      Mis tareas incluían asimismo mantener reuniones telefónicas con clientes, para acordar
      el delineamiento de proyectos para luego implementarlos en código.
    `,
    competences: [
      'Desarrollo backend en general',
      'Delineamiento de proyectos con clientes',
      'Desarrollo de features requeridas por el cliente'
    ]
  }
] as JobModel[];
