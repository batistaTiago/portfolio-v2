import { Component, OnInit } from '@angular/core';
import { SocialMedia } from 'src/app/shared/models/social-media.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public socialMedia: SocialMedia[];

  constructor() {
    this.socialMedia = SocialMedia.createSocialMedias([
      {
        linkTitle: 'GitHub',
        iconClass: 'fab fa-github',
        url: 'https://www.github.com/batistaTiago'
      },
      {
        linkTitle: 'LinkedIn',
        iconClass: 'fab fa-linkedin-in',
        url: 'https://www.linkedin.com/in/batistaTiago'
      },
      {
        iconClass: 'fas fa-code',
        linkTitle: 'CodersRank',
        url: 'https://profile.codersrank.io/user/batistatiago'
      }
    ]);
  }

  ngOnInit() {
  }

}
