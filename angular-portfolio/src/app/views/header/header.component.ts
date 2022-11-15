import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import i18n from './header.component.i18n';
import { currentLanguage, Language } from 'src/app/shared/i18n/language';

interface HeaderSection { displayName: string, link: string };

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private language: Language = currentLanguage;

  public menuOpen: boolean = false;
  public sections: Array<HeaderSection> = [];

  public constructor(public router: Router) { }
  
  public ngOnInit() {
    const sectionLinks = {
      home: '/',
      resume: '/resume',
      projects: '/projects',
      contact: '/contact',
    };

    for (let prop in sectionLinks) {
      this.sections.push({
        link: sectionLinks[prop],
        displayName: i18n[this.language].sections[prop].displayName
      });
    }
  }
  
  public menuTogglerButtonClick() {
    this.menuOpen = !this.menuOpen;
  }
}
