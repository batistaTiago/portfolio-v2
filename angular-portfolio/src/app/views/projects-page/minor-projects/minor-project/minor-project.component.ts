import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '../../../../shared/models/project.model';

@Component({
  selector: 'app-minor-project',
  templateUrl: './minor-project.component.html',
  styleUrls: ['./minor-project.component.scss']
})
export class MinorProjectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() data: Project = null
  @Output() minorProjectImageClickedEvent: EventEmitter<string> = new EventEmitter();

  public showMinorProjectImage() {
    this.minorProjectImageClickedEvent.emit(this.data.imageUrls[0]);
  }

}
