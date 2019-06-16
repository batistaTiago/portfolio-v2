import { Component, AfterViewInit } from '@angular/core';
import { FeaturedProject } from '../../shared/models/featured-project.model';
import { ProjectService } from '../../services/projects.service';
import { Project } from '../../shared/models/project.model';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss'],
  providers: [ProjectService]
})
export class ProjectsPage implements AfterViewInit {

  constructor(private projectService: ProjectService) { }

  public featuredProjects: FeaturedProject[] = []
  public minorProjects: Project[] = []

  async ngAfterViewInit() {
    const projects = await this.projectService.getProjects()
    this.featuredProjects = projects[0]
    this.minorProjects = projects[1]
  }

  public dismissModal() {
    this.modalIsShowing = false
  }

  public showModal(urls: string[]) {
    if (Array.isArray(urls)) {
      this.modalIsShowing = true
      this.modalData.images = urls
      this.modalType = 'images'
    } else if ((<string>typeof (urls)).toLowerCase() === 'string') {
      this.modalIsShowing = true
      this.modalData.image = urls
      this.modalType = 'image'
    }
  }

  public modalIsShowing: boolean = false

  public modalType: string = null
  public modalData: any = {
    "titulo": "",
    "corpo": ""
  }
}