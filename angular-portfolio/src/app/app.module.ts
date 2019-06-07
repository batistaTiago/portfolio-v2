import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { MainFooterComponent } from './main-footer/main-footer.component';

import { ContactComponent } from './contact/contact.component';

import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectItemComponent } from './project-list/project-item/project-item.component';

import { MainSpinnerComponent } from './main-spinner/main-spinner.component';


import { SkillsComponent } from './skills/skills.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { FilledComponent } from './skills/progress-bar/filled/filled.component';
import { ModalComponent } from './modal/modal.component';
import { MinorProjectsComponent } from './project-list/minor-projects/minor-projects.component';
import { ProjectDescriptionComponent } from './project-list/project-item/project-description/project-description.component';
import { ProjectService } from './services/projects.service';
import { MinorProjectComponent } from './project-list/minor-projects/minor-project/minor-project.component';


@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    HeroSectionComponent,
    MainFooterComponent,
    ProjectListComponent,
    ContactComponent,
    ProjectItemComponent,
    SkillsComponent,
    ProgressBarComponent,
    FilledComponent,
    MainSpinnerComponent,
    ModalComponent,
    MinorProjectsComponent,
    ProjectDescriptionComponent,
    MinorProjectComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule.forRoot(AppRoutingModule.AppRoutes())
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
