
export default class JobModel {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public competences: string[]
  ) {}
}
