import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import ProjectModel from '../../models/project.model';
import {ProjectsService} from '../../services/projects.service';


@Component({
  selector: 'app-projects-detail',
  templateUrl: './projects-detail.component.html',
  styleUrls: ['./projects-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsDetailComponent implements OnInit {
  projectId: string;
  project: ProjectModel;
  colorClasses = [
    'primary',
    'info',
    'success',
    'danger',
    'warning',
    'default'
  ];

  constructor(
    private route: ActivatedRoute,
    private projectsService: ProjectsService,
  ) { }

  ngOnInit() {
    this.projectId = this.route.snapshot.params.projectId;
    this.project = this.projectsService.projectsArray.find(
      ( project: ProjectModel ) => project.id === this.projectId
    );
    window.scrollTo(0, 0);
  }

  _random(max: number): number {
    return Math.floor( Math.random() * Math.floor(max) );
  }

  // Las badges van a tener color random
  getBadgeClasses(): string[] {
    const colorClassesLength = this.colorClasses.length;
    const colorClass = this.colorClasses[ this._random( colorClassesLength ) ];
    return [ 'badge', `badge-${ colorClass }` ];
  }

}
