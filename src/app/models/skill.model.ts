
export default class SkillModel {
  constructor(
    public title: string,
    public minValue: number,
    public maxValue: number,
    public valueNow: number,
    public percentage: number
  ) {}
}
