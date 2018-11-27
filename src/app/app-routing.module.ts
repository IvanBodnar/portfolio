import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ProjectsDetailComponent} from './components/projects-detail/projects-detail.component';
import {HomeComponent} from './components/home/home.component';
import {JobsDetailComponent} from './components/jobs-detail/jobs-detail.component';


const routes: Routes = [
  {path: 'project/:projectId', component: ProjectsDetailComponent},
  {path: 'job/:jobId', component: JobsDetailComponent},
  {path: '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
