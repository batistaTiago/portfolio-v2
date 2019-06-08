import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroPage } from './hero-page/hero-page.component';
import { ProjectsPage } from './projects-page/projects-page.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactPage } from './contact-page/contact-page.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  private static routes: Routes = [
    { path: '', component: HeroPage },
    // { path: 'skills', component: SkillsComponent },
    { path: 'projects', component: ProjectsPage },
    { path: 'contact', component: ContactPage}
  ]

  public static AppRoutes(): Routes {
    return AppRoutingModule.routes;
  }
 }
