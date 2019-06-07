import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-minor-projects',
  templateUrl: './minor-projects.component.html',
  styleUrls: ['./minor-projects.component.scss']
})
export class MinorProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public showMenu: boolean = false

  public toggleMenu() {
    this.showMenu = !this.showMenu
  }

}
