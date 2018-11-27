import { Injectable } from '@angular/core';
import JobModel from '../models/job.model';
import jobsArray from '../data/jobs.db';


@Injectable({
  providedIn: 'root'
})
export class JobsService {
  jobsArray: JobModel[] = jobsArray;

  constructor() { }
}
