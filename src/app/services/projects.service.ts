import { Injectable } from '@angular/core';

import projectsArray from '../data/projects.db';
import ProjectModel from '../models/project.model';


@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projectsArray: ProjectModel[] = projectsArray;

  constructor() { }

}
