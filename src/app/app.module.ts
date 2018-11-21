import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PersonalDataComponent } from './components/personal-data/personal-data.component';
import { SkillsListComponent } from './components/skills-list/skills-list.component';
import { SkillsDetailComponent } from './components/skills-detail/skills-detail.component';
import { ProjectsListComponent } from './components/projects-list/projects-list.component';
import { ProjectsDetailComponent } from './components/projects-detail/projects-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PersonalDataComponent,
    SkillsListComponent,
    SkillsDetailComponent,
    ProjectsListComponent,
    ProjectsDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
