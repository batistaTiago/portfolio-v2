import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { currentLanguage } from 'src/app/shared/i18n/language';
import { ProjectService } from '../../../services/projects.service';
import { IProject } from '../../../shared/models/project.model';
import i18n from '../projects-page.i18n';

@Component({
  selector: 'app-minor-projects',
  templateUrl: './minor-projects.component.html',
  styleUrls: ['./minor-projects.component.scss'],
  providers: [ ProjectService ]
})
export class MinorProjectsComponent implements OnInit {
  @Input() public projects: IProject[] = [];
  @Output() minorProjectImageClickedEvent: EventEmitter<string> = new EventEmitter();
  
  public showMenu: boolean = true;
  public minorProjectsHeading: string;
  
  public constructor() { }

  public ngOnInit() {
    this.minorProjectsHeading = i18n[currentLanguage].minorProjectsHeading;
  }

  public toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  public propagate(eventData) {
    this.minorProjectImageClickedEvent.emit(eventData);
  }
}
