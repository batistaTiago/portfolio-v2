import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';


import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectItemComponent } from './project-list/project-item/project-item.component';
import { ProgressBarComponent } from './skills/progress-bar/progress-bar.component';
import { FilledComponent } from './skills/progress-bar/filled/filled.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    HeroSectionComponent,
    MainFooterComponent,
    ProjectListComponent,
    SkillsComponent,
    ContactComponent,
    ProjectItemComponent,
    ProgressBarComponent,
    FilledComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutingModule.AppRoutes())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
