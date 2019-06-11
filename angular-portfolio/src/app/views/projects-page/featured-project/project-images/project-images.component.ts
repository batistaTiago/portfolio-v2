import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BTMobileDetector } from '../../../../shared/utils';

@Component({
  selector: 'app-project-images',
  templateUrl: './project-images.component.html',
  styleUrls: ['./project-images.component.scss']
})
export class ProjectImagesComponent implements OnInit {
  
  constructor() { }
  
  ngOnInit() {
  }
  
  @Output() imageClickedEvent: EventEmitter<string[]> = new EventEmitter();
  
  public featuredImageClicked() {
    // if (BTMobileDetector.isDesktop()) {
      this.imageClickedEvent.emit(this.images)      
    // }
  }
  
  @Input() images: string[] = []
  
  public selectedImageIndex: number = 0;
  public imageClicked(i: number) {
    this.selectedImageIndex = i;
  }
  
}
