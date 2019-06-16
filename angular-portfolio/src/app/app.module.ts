import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MainHeaderComponent } from './views/main-header/main-header.component';
import { HeroPage } from './views/hero-page/hero-page.component';
import { MainFooterComponent } from './views/main-footer/main-footer.component';

import { ContactPage } from './views/contact-page/contact-page.component';

import { ProjectsPage } from './views/projects-page/projects-page.component';
import { FeaturedProjectComponent } from './views/projects-page/featured-project/featured-project.component';

import { LoadingSpinnerComponent } from './views/loading-spinner/loading-spinner.component';


import { SkillsComponent } from './views/skills/skills.component';
import { ProgressBarComponent } from './views/progress-bar/progress-bar.component';
import { FilledComponent } from './views/skills/progress-bar/filled/filled.component';
import { ModalComponent } from './views/modal/modal.component';
import { MinorProjectsComponent } from './views/projects-page/minor-projects/minor-projects.component';
import { ProjectDescriptionComponent } from './views/projects-page/featured-project/project-description/project-description.component';
import { MinorProjectComponent } from './views/projects-page/minor-projects/minor-project/minor-project.component';
import { LogoComponent } from './views/main-header/logo/logo.component';
import { ProjectImagesComponent } from './views/projects-page/featured-project/project-images/project-images.component';
import { ResumePage } from './views/resume-page/resume-page.component';

import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    HeroPage,
    MainFooterComponent,
    ProjectsPage,
    ContactPage,
    FeaturedProjectComponent,
    SkillsComponent,
    ProgressBarComponent,
    FilledComponent,
    LoadingSpinnerComponent,
    ModalComponent,
    MinorProjectsComponent,
    ProjectDescriptionComponent,
    MinorProjectComponent,
    LogoComponent,
    ProjectImagesComponent,
    ResumePage
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(AppRoutingModule.AppRoutes())
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
