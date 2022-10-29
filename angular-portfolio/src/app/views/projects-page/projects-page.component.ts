import { Component, OnInit, AfterViewInit } from '@angular/core';
import { IFeaturedProject } from '../../shared/models/featured-project.model';
import { ICompanyProject } from '../../shared/models/company-project.model';
import { ProjectService } from '../../services/projects.service';
import { IProject } from '../../shared/models/project.model';
import i18n from 'src/app/views/projects-page/projects-page.i18n';
import { currentLanguage, Language } from 'src/app/shared/i18n/language';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss'],
  providers: [ProjectService]
})
export class ProjectsPage implements OnInit, AfterViewInit {
  private language: Language = currentLanguage;

  public headings: { mainHeading: string, subHeading: string, paragraph: string };

  constructor(private projectService: ProjectService) { }


  public featuredProjects: IFeaturedProject[] = []
  public companyProjects: ICompanyProject[] = []
  public minorProjects: IProject[] = []

  async ngAfterViewInit() {
    [ this.featuredProjects, this.minorProjects, this.companyProjects ] = await this.projectService.getProjects();
  }

  ngOnInit() {
    this.headings = { ...i18n[this.language] }
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