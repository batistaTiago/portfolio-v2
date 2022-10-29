import { Component, OnInit } from '@angular/core';
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
      alert(`Para a utilização de todas as funcionalidades deste site, recomenda-se o uso de um nos navegadores a seguir: Chrome, Firefox ou Opera.`)
    }
  }
}
