import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {
  
  constructor(public router: Router) { }
  
  ngOnInit() {
  }
  
  public menuOpen: boolean = false
  public menuTogglerButtonClick() {
    this.menuOpen = !this.menuOpen;
  }

}
