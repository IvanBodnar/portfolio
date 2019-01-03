import { Component, OnInit } from '@angular/core';

import ProjectModel from '../../models/project.model';
import {ProjectsService} from '../../services/projects.service';



@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {
  projects: ProjectModel[];

  constructor(
    private projectsService: ProjectsService
  ) { }

  ngOnInit() {
    this.projectsService.projectsArray$
      .subscribe(
        projects => this.projects = projects,
        err => console.log(err)
      );
  }

}
