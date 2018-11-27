import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {JobsService} from '../../services/jobs.service';
import JobModel from '../../models/job.model';


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
    this.job = this.jobsService.jobsArray.find(
      ( job: JobModel ) => job.id === this.jobId
    );
    window.scrollTo(0, 0);
  }

}
