import { Component, OnInit } from '@angular/core';
import i18n from 'src/app/views/hero-page/hero-page.i18n';
import { currentLanguage } from 'src/app/shared/i18n/language';
import { Language } from 'src/app/shared/i18n/language';
import { BTAnimationManager } from '../../shared/animation-manager';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styleUrls: ['./hero-page.component.scss']
})
export class HeroPage implements OnInit {
  private language: Language;
  public titles: string[];

  public constructor() {
  }
  
  public ngOnInit() {
    this.language = currentLanguage;
    this.titles = i18n[this.language].titles;
  }

  public shouldAnimate(): boolean {
    return BTAnimationManager.getInstance().shouldAnimateHeroPage()
  }

  public animationDidFinish(event: AnimationEvent) {
      BTAnimationManager.getInstance().animationDidFinish(event)
  }
}
