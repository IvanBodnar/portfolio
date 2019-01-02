import {Injectable} from '@angular/core';

import JobModel from '../models/job.model';
import jobsArrayEs from '../data/jobs.db';
import jobsArrayEn from '../data/jobs.en.db';
import {TranslationService} from './translation.service';
import Languages from '../models/language.enum';
import {BehaviorSubject, Observable, of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class JobsService {
  language: Languages;
  private _jobsArraySubject = new BehaviorSubject<JobModel[]>(null);
  jobsArray = this._jobsArraySubject.asObservable();

  constructor(
    private translationService: TranslationService
  ) {
    this.translationService.language$
      .subscribe(
        ( lang: Languages ) => {
          if (lang === Languages.es) {
            this._jobsArraySubject.next( jobsArrayEs );
          } else if (lang === Languages.en) {
            this._jobsArraySubject.next( jobsArrayEn );
          } else {
            console.log('Lenguaje no Contemplado');
          }
        },
        err => console.log(err)
      );
  }
}
