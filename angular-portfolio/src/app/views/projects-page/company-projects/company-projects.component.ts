import { Component, Input, OnInit } from '@angular/core';
import { currentLanguage } from 'src/app/shared/i18n/language';
import { ICompanyProject } from 'src/app/shared/models/company-project.model';
import i18n from '../projects-page.i18n';

@Component({
  selector: 'app-company-projects',
  templateUrl: './company-projects.component.html',
  styleUrls: ['./company-projects.component.scss']
})
export class CompanyProjectsComponent implements OnInit {

  @Input() public projects: Array<ICompanyProject & { paragraphs: string[] }>;

  public showMenu: boolean = true
  public companyProjectsHeading: string;

  constructor() { }

  ngOnInit() {
    this.projects = this.projects.map(project => {
      project.paragraphs = project.description.trim().split('\n');
      return project;
    });

    this.companyProjectsHeading = i18n[currentLanguage].companyProjectsHeading;

    console.log(this.projects);
  }

  public toggleMenu() {
    this.showMenu = !this.showMenu
  }

}
