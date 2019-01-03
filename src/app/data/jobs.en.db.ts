import JobModel from '../models/job.model';


export default [
  {
    id: 'observatorio',
    title: 'Transit Safety Observatory - CABA',
    description: `
      On the Transit Safety Observatory I worked as Database administrator
      (Postgres), developer and geographic data analyst. I developed multiple
      applications, web and desktop, using PyQt and Django.
    `,
    competences: [
      'Database maintenance',
      'Data process and cleaning',
      'Geoprocessing tasks with Postgis, Arcgis and Qgis'
    ]
  },
  {
    id: 'anachronics',
    title: 'Anachronics SRL',
    description: `
      In Anachronics SRL I worked as backend developer, using plpgsql
      and SQL.\n
      My tasks included also to have phone meetings with clients, to agree
      about the delineation of different projects, so can be then translated into code.
    `,
    competences: [
      'Backend development',
      'Project delineation with clients',
      'Client required features development'
    ]
  }
] as JobModel[];
