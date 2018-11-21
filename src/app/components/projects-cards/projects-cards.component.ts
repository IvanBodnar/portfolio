import {Component, Input, OnInit} from '@angular/core';

import ProjectModel from '../../models/project.model';


@Component({
  selector: 'app-projects-cards',
  templateUrl: './projects-cards.component.html',
  styleUrls: ['./projects-cards.component.css']
})
export class ProjectsCardsComponent implements OnInit {
  @Input() project: ProjectModel;

  constructor() { }

  ngOnInit() { }

}
