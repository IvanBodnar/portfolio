import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AppComponent} from './app.component';
import {ProjectsDetailComponent} from './components/projects-detail/projects-detail.component';


const routes: Routes = [
  {path: 'project/:projectId', component: ProjectsDetailComponent},
  {path: '', component: AppComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
