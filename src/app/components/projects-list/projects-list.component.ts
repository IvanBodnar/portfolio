import { Component, OnInit } from '@angular/core';

import ProjectModel from '../../models/project.model';
import projectsArray from '../../data/projects.db';


@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {
  projects: ProjectModel[] = projectsArray;

  constructor() { }

  ngOnInit() { }

}
