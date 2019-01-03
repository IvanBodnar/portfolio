import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import ProjectModel from '../../models/project.model';
import {ProjectsService} from '../../services/projects.service';
import {map} from 'rxjs/operators';


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
    private changeDetector: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.projectId = this.route.snapshot.params.projectId;
    this.projectsService.projectsArray$
      .pipe(
        map( projects => projects.find( project => project.id === this.projectId ) )
      )
      .subscribe(
        project => {
          this.project = project;
          // Se marca para check porque si no no detecta el
          // cambio -> está en ChangeDetectionStrategy.OnPush
          // por el tema de las clases random de las tags de skills
          this.changeDetector.markForCheck();
        }
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
