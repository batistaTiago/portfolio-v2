import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AnimationManager } from '../../shared/animation-manager';

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
    return AnimationManager.getInstance().shouldAnimateHeroPage()
  }

  public animationDidFinish(event: AnimationEvent) {
      AnimationManager.getInstance().animationDidFinish(event)
  }
}
