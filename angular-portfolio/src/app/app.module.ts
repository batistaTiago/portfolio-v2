import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { HeroPage } from './hero-page/hero-page.component';
import { MainFooterComponent } from './main-footer/main-footer.component';

import { ContactPage } from './contact-page/contact-page.component';

import { ProjectsPage } from './projects-page/projects-page.component';
import { FeaturedProjectComponent } from './projects-page/featured-project/featured-project.component';

import { MainSpinnerComponent } from './main-spinner/main-spinner.component';


import { SkillsComponent } from './skills/skills.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { FilledComponent } from './skills/progress-bar/filled/filled.component';
import { ModalComponent } from './modal/modal.component';
import { MinorProjectsComponent } from './projects-page/minor-projects/minor-projects.component';
import { ProjectDescriptionComponent } from './projects-page/featured-project/project-description/project-description.component';
import { ProjectService } from './services/projects.service';
import { MinorProjectComponent } from './projects-page/minor-projects/minor-project/minor-project.component';
import { LogoComponent } from './main-header/logo/logo.component';


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
    MainSpinnerComponent,
    ModalComponent,
    MinorProjectsComponent,
    ProjectDescriptionComponent,
    MinorProjectComponent,
    LogoComponent
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
