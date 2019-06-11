import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FeaturedProject } from '../../../shared/models/featured-project.model';

@Component({
  selector: 'app-featured-project',
  templateUrl: './featured-project.component.html',
  styleUrls: ['./featured-project.component.scss']
})
export class FeaturedProjectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output() imageClickedEvent: EventEmitter<string[]> = new EventEmitter();

  public featuredImageClicked(imageUrls: string[]) {
    this.imageClickedEvent.emit(imageUrls)
  }

  public showDescription: boolean = false
  public toggleDescription() {
    this.showDescription = !this.showDescription
  }

  @Input() projectData: FeaturedProject = null;

  public propagate(eventData) {
    this.imageClickedEvent.emit(eventData)
  }

}
