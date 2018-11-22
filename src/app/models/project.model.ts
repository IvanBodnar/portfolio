
export default class ProjectModel {
  constructor(
    public id: string,
    public title: string,
    public text: string,
    public imgUrl: string,
    public projectUrl: string,
    public explanationText: string,
    public technologiesUsed: string[]
  ) {}
}
