import {Component, Input, OnInit} from '@angular/core';
import SkillModel from '../../models/skill.model';

@Component({
  selector: 'app-skills-detail',
  templateUrl: './skills-detail.component.html',
  styleUrls: ['./skills-detail.component.css']
})
export class SkillsDetailComponent implements OnInit {
  @Input() skill: SkillModel;

  constructor() { }

  ngOnInit() {
  }

}
