import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  constructor(public router: Router) { }
  
  ngOnInit() {
  }
  
  public menuOpen: boolean = false
  public menuTogglerButtonClick() {
    this.menuOpen = !this.menuOpen;
  }

}
