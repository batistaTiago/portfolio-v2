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

  @ViewChild('logoRoot') logo: ElementRef

  public menuOpen: boolean = false
  public menuTogglerButtonClick() {
    this.menuOpen = !this.menuOpen;
  }

  public logoClick(event) {
    this.logo.nativeElement.classList.add('animated')
  }

  public removeAnimatedClass(event: AnimationEvent) {
    if (event.animationName === 'logoTopAnimation') {
      setTimeout(
        () => {
          this.logo.nativeElement.classList.remove('animated')
        }, 
        200
      )
      
    }
  }
}
