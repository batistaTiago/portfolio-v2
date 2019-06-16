import { Component, OnInit } from '@angular/core';
import { BTAnimationManager } from '../../shared/animation-manager';
import { BTConstants } from 'src/app/app.constants';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styleUrls: ['./hero-page.component.scss']
})
export class HeroPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public shouldAnimate(): boolean {
    return BTAnimationManager.getInstance().shouldAnimateHeroPage()
  }

  public animationDidFinish(event: AnimationEvent) {
      BTAnimationManager.getInstance().animationDidFinish(event)
  }
}
