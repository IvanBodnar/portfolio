import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {JobsService} from '../../services/jobs.service';
import JobModel from '../../models/job.model';
import {filter, map} from 'rxjs/operators';


@Component({
  selector: 'app-jobs-detail',
  templateUrl: './jobs-detail.component.html',
  styleUrls: ['./jobs-detail.component.css']
})
export class JobsDetailComponent implements OnInit {
  jobId: string;
  job: JobModel;

  constructor(
    private route: ActivatedRoute,
    private jobsService: JobsService
  ) { }

  ngOnInit() {
    this.jobId = this.route.snapshot.params.jobId;
    this.jobsService.jobsArray$
      .pipe(
        map( jobs => jobs.find( job => job.id === this.jobId ) )
      )
      .subscribe(
        job => this.job = job
      );
    window.scrollTo(0, 0);
  }

}
