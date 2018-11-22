import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ProjectsDetailComponent} from './components/projects-detail/projects-detail.component';
import {HomeComponent} from './components/home/home.component';


const routes: Routes = [
  {path: 'project/:projectId', component: ProjectsDetailComponent},
  {path: '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
