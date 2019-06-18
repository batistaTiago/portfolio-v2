import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BTBrowserDetector } from './shared/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-portfolio';

  ngOnInit() {
    if(!BTBrowserDetector.browserIsSupported()) {
      alert('Esta página não é bem suportada no seu navegador. Recomenda-se a utilização do Chrome, Firefox ou Opera.')
    }
  }
}
