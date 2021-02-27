import { Component, Input, OnInit } from '@angular/core';
import { ICompanyProject } from 'src/app/shared/models/company-project.model';

@Component({
  selector: 'app-company-projects',
  templateUrl: './company-projects.component.html',
  styleUrls: ['./company-projects.component.scss']
})
export class CompanyProjectsComponent implements OnInit {

  @Input() public projects: ICompanyProject[];

  public showMenu: boolean = true

  constructor() { }

  ngOnInit() {
  }

  public toggleMenu() {
    this.showMenu = !this.showMenu
  }
}
