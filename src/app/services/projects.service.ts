import {BehaviorSubject} from 'rxjs';
import { Injectable } from '@angular/core';

import projectsArrayEs from '../data/projects.db';
import projectsArrayEn from '../data/projects.en.db';
import ProjectModel from '../models/project.model';
import {TranslationService} from './translation.service';
import Languages from '../models/language.enum';


@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  language: Languages;
  private _projectsArraySubject = new BehaviorSubject<ProjectModel[]>(null);
  projectsArray$ = this._projectsArraySubject.asObservable();

  constructor(
    private translationService: TranslationService
  ) {
    this.translationService.language$
      .subscribe(
        ( lang: Languages ) => {
          if (lang === Languages.es) {
            this._projectsArraySubject.next( projectsArrayEs );
          } else if (lang === Languages.en) {
            this._projectsArraySubject.next( projectsArrayEn );
          } else {
            console.log('Lenguaje no Contemplado');
          }
        },
        err => console.log(err)
      );
  }

}
