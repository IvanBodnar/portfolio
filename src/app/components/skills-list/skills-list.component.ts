import { Component, OnInit } from '@angular/core';

import SkillModel from '../../models/skill.model';
import skillsArray from '../../data/skills.db';


@Component({
  selector: 'app-skills-list',
  templateUrl: './skills-list.component.html',
  styleUrls: ['./skills-list.component.css']
})
export class SkillsListComponent implements OnInit {
  skills: SkillModel[] = skillsArray;

  constructor() { }

  ngOnInit() {  }

}
