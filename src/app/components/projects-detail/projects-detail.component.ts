import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import ProjectModel from '../../models/project.model';
import {ProjectsService} from '../../services/projects.service';


@Component({
  selector: 'app-projects-detail',
  templateUrl: './projects-detail.component.html',
  styleUrls: ['./projects-detail.component.css']
})
export class ProjectsDetailComponent implements OnInit {
  projectId: string;
  project: ProjectModel;

  constructor(
    private route: ActivatedRoute,
    private projectsService: ProjectsService
  ) { }

  ngOnInit() {
    this.projectId = this.route.snapshot.params.projectId;
    this.project = this.projectsService.projectsArray.find(
      ( project: ProjectModel ) => project.id === this.projectId
    );
  }

}
