import { Component, AfterViewInit } from '@angular/core';
import { FeaturedProject } from '../shared/models/featured-project.model';
import { ProjectService } from '../services/projects.service';
import { Project } from '../shared/models/project.model';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  providers: [ ProjectService ]
})
export class ProjectListComponent implements AfterViewInit {
  
  constructor(private projectService: ProjectService) { }
  
  public featuredProjects: FeaturedProject[] = []
  public minorProjects: Project[] = []

  async ngAfterViewInit() {
    setTimeout(
      async () => {
        const projects = await this.projectService.getProjects()
        this.featuredProjects = projects[0]
        this.minorProjects = projects[1]
      }, 10
      )
    }
  
    public dismissModal() {
      this.modalIsShowing = false
    }

    public showModal(url: string) {
      this.modalIsShowing = true
      this.modalData.image = url
    }
  
    public modalIsShowing: boolean = false
  
    public modalData: any = {
      "titulo": "",
      "corpo": ""
    }

    public test(data: any) {

      console.log('works!', data)
    }

}