import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroSectionComponent } from './hero-section/hero-section.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  private static _routes: Routes = [
    { path: '', component: HeroSectionComponent },
    { path: 'skills', component: SkillsComponent },
    { path: 'projects', component: ProjectListComponent},
    { path: 'contact', component: ContactComponent}
  ]

  public static AppRoutes(): Routes {
    return AppRoutingModule._routes;
  }
 }
