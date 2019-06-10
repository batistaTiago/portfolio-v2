import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroPage } from './views/hero-page/hero-page.component';
import { ProjectsPage } from './views/projects-page/projects-page.component';
// import { SkillsComponent } from './views/skills/skills.component';
import { ResumePage } from './views/resume-page/resume-page.component';
import { ContactPage } from './views/contact-page/contact-page.component';

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
    { path: 'curriculo', component: ResumePage},
    { path: 'contact', component: ContactPage}
  ]

  public static AppRoutes(): Routes {
    return AppRoutingModule.routes;
  }
 }
