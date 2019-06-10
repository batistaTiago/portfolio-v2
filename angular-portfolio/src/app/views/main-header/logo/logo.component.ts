import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @ViewChild('logoRoot') logo: ElementRef
  
  public removeAnimatedClass(event: AnimationEvent) {
    if (event.animationName === 'logoTopAnimation') {
      if (!this.animateLogo) {
        this.logo.nativeElement.classList.remove('animated')
      }
    }
  }
  
  public animateLogo: boolean = false
  
  public onLogoHover() {
    this.animateLogo = true
    this.logo.nativeElement.classList.add('animated')
  }
  
  public onLogoExit() {
    this.animateLogo = false
  }

}
