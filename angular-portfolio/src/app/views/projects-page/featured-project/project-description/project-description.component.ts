import { Component, OnInit, Input } from '@angular/core';
import { FeaturedProject } from '../../../../shared/models/featured-project.model';

@Component({
  selector: 'app-project-description',
  templateUrl: './project-description.component.html',
  styleUrls: ['./project-description.component.scss']
})
export class ProjectDescriptionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() data: FeaturedProject = null

}
