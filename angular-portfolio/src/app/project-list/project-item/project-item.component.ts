import { Component, OnInit, Input } from '@angular/core';

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

  public imageClicked(i: number) {
    this.selectedImageIndex = i;
  }

  @Input() projectData: any = null;

  public featuredImageClicked() {
    this.showModal = true
  }

  public dismissModal() {
    this.showModal = false
  }

  private showModal: boolean = false


  public modalData: object = {
    "imageIndex": this.selectedImageIndex,
    "titulo": "preview",
    "corpo": "<div style='color:white'> haiuhuaheua hjueahg uhg</div>"
  }

}
