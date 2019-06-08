import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FeaturedProject } from '../../shared/models/featured-project.model';

@Component({
  selector: 'app-featured-project',
  templateUrl: './featured-project.component.html',
  styleUrls: ['./featured-project.component.scss']
})
export class FeaturedProjectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public selectedImageIndex: number = 0;
  @Output() imageClickedEvent: EventEmitter<string[]> = new EventEmitter();

  public imageClicked(i: number) {
    this.selectedImageIndex = i;
  }

  public featuredImageClicked() {
    this.imageClickedEvent.emit(this.projectData.imageUrls)
  }


  public showDescription: boolean = false
  public toggleDescription() {
    this.showDescription = !this.showDescription
  }

  @Input() projectData: FeaturedProject = null;

}
