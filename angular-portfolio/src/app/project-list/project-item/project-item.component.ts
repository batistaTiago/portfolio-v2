import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FeaturedProject } from '../../shared/models/featured-project.model';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public selectedImageIndex: number = 0;
  @Output() imageClickedEvent: EventEmitter<string> = new EventEmitter();

  public imageClicked(i: number) {
    this.selectedImageIndex = i;
  }

  public featuredImageClicked() {
    this.imageClickedEvent.emit(this.projectData.imageUrls[this.selectedImageIndex])
  }

  @Input() projectData: FeaturedProject = null;

}
