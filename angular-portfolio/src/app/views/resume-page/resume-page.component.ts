import { Component, OnInit } from '@angular/core';
import { currentLanguage } from 'src/app/shared/i18n/language';
import { Course } from 'src/app/shared/models/course.model';
import { GeneralQualification } from 'src/app/shared/models/general-qualification.model';
import backEndSkills from './resources/back-end-skills';
import courses from './resources/courses';
import frontEndSkills from './resources/front-end-skills';
import generalSkills from './resources/general-skills';
import programmingLanguages from './resources/programming-languages';
import i18n from './resume-page.component.i18n'

@Component({
  selector: 'app-resume-page',
  templateUrl: './resume-page.component.html',
  styleUrls: ['./resume-page.component.scss']
})
export class ResumePage implements OnInit {

  public courses: Course[];
  public programmingLanguages: GeneralQualification[];
  public frontEndQualifications: GeneralQualification[];
  public backEndQualifications: GeneralQualification[];
  public otherQualifications: GeneralQualification[];
  public headings: any;

  constructor() {
    this.courses = Course.createCourses(courses);
    this.programmingLanguages = GeneralQualification.createGeneralQualifications(programmingLanguages);
    this.frontEndQualifications = GeneralQualification.createGeneralQualifications(frontEndSkills);
    this.backEndQualifications = GeneralQualification.createGeneralQualifications(backEndSkills);
    this.otherQualifications = GeneralQualification.createGeneralQualifications(generalSkills);
   }

  public ngOnInit() {
    this.headings = i18n[currentLanguage].headings
  }

  public showAdditionalInfo: boolean = true;

  public toggleAdditionalInfo() {
    this.showAdditionalInfo = !this.showAdditionalInfo;
  }
}