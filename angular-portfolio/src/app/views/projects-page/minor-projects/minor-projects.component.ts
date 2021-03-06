import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ProjectService } from '../../../services/projects.service';
import { IProject } from '../../../shared/models/project.model';

@Component({
  selector: 'app-minor-projects',
  templateUrl: './minor-projects.component.html',
  styleUrls: ['./minor-projects.component.scss'],
  providers: [ ProjectService ]
})
export class MinorProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public showMenu: boolean = false

  @Input() public projects: IProject[] = []
  @Output() minorProjectImageClickedEvent: EventEmitter<string> = new EventEmitter()

  public toggleMenu() {
    this.showMenu = !this.showMenu
  }


  public propagate(eventData) {
    this.minorProjectImageClickedEvent.emit(eventData)
  }

}
