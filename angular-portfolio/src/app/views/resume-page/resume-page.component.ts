import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/shared/models/course.model';
import { GeneralQualification } from 'src/app/shared/models/general-qualification.model';

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

  constructor() {
    this.courses = Course.createCourses([
      {
        courseTitle: 'Desenvolvedor web completo 2019',
        linkTitle: 'Desenvolvedor web completo 2019',
        url: 'https://www.udemy.com/web-completo'
      },
      {
        courseTitle: 'Desenvolvedor web com ES6, TypeScript e Angular',
        linkTitle: 'Desenvolvedor web com ES6, TypeScript e Angular',
        url: 'https://www.udemy.com/curso-de-desenvolvimento-web-com-es6-typescript-e-angular-4/'
      },
      {
        courseTitle: 'The Advanced Web Developer Bootcamp',
        linkTitle: 'The Advanced Web Developer Bootcamp',
        url: 'https://www.udemy.com/the-advanced-web-developer-bootcamp/'
      },
      {
        courseTitle: 'Desenvolvedor NodeJS',
        linkTitle: 'Desenvolvedor NodeJS',
        url: 'https://www.udemy.com/curso-completo-do-desenvolvedor-nodejs/'
      },
      {
        courseTitle: 'The Complete Junior to Senior Web Developer Roadmap (2019)',
        linkTitle: 'The Complete Junior to Senior Web Developer Roadmap (2019)',
        url: 'https://www.udemy.com/the-complete-junior-to-senior-web-developer-roadmap/'
      },
      {
        courseTitle: 'Laravel 5.6 Completo - O mais poderoso Framework PHP',
        linkTitle: 'Laravel 5.6 Completo - O mais poderoso Framework PHP',
        url: 'https://www.udemy.com/laravelcompleto/'
      },
      {
        courseTitle: 'TypeScript, Node, ES6 e Postgres - CRIE PROJETOS DO ZERO',
        linkTitle: 'TypeScript, Node, ES6 e Postgres - CRIE PROJETOS DO ZERO',
        url: 'https://www.udemy.com/typescript-na-pratica-criando-aplicacoes-web-com-typescript'
      },
      {
        courseTitle: 'Firebase para Web e Apps híbridos',
        linkTitle: 'Firebase para Web e Apps híbridos',
        url: 'https://www.udemy.com/firebase-para-web-e-apps-hibridos'
      },
      {
        courseTitle: 'Mastering Data Structures & Algorithms using C and C++',
        linkTitle: 'Mastering Data Structures & Algorithms using C and C++',
        url: 'https://www.udemy.com/course/datastructurescncpp'
      },
      {
        courseTitle: 'Docker: Ferramenta essencial para Desenvolvedores',
        linkTitle: 'Docker: Ferramenta essencial para Desenvolvedores',
        url: 'https://www.udemy.com/course/curso-docker/'
      },
      {
        courseTitle: 'Bootcamp IGTI: DevOps',
        linkTitle: 'Bootcamp IGTI: DevOps',
        url: 'https://www.igti.com.br/'
      },
      {
        courseTitle: 'PHPUnit in 2020 - Unit & Selenium Testing For PHP Developers',
        linkTitle: 'PHPUnit in 2020 - Unit & Selenium Testing For PHP Developers',
        url: 'https://www.udemy.com/course/phpunit-unit-selenium-testing-for-php-developers/'
      }, 
      {
        courseTitle: 'Certificação AWS Desenvolvedor 2020',
        linkTitle: 'Certificação AWS Desenvolvedor 2020',
        url: 'https://www.udemy.com/course/aws-developer/'
      }, 
    ]);

    this.programmingLanguages = GeneralQualification.createGeneralQualifications([
      {
        name: 'PHP',
      },
      {
        name: 'JavaScript',
      },
      {
        name: 'TypeScript',
      },
      {
        name: 'Swift',
      },
      {
        name: 'Python',
      },
      {
        name: 'C',
      },
      {
        name: 'C++',
      },
      {
        name: 'C#',
      }
    ]);

    this.frontEndQualifications = GeneralQualification.createGeneralQualifications([
      {
        name: 'HTML',
      },
      {
        name: 'CSS',
      },
      {
        name: 'SASS',
      },
      {
        name: 'Javascript',
      },
      {
        name: 'Bootstrap',
      },
      {
        name: 'jQuery',
      },
      {
        name: 'Angular',
      },
      {
        name: 'React',
      }
    ]);

    this.backEndQualifications = GeneralQualification.createGeneralQualifications([
      {
        name: 'Laravel',
      },
      {
        name: 'NodeJS',
      },
      {
        name: 'Kafka',
      },
      {
        name: 'Redis',
      },
      {
        name: 'MySQL',
      },
      {
        name: 'MongoDB',
      },
      {
        name: 'Firebase',
      },
    ]);

    this.otherQualifications = GeneralQualification.createGeneralQualifications([
      {
        name: 'Git',
      },
      {
        name: 'Docker',
      },
      {
        name: 'SSH/Linux Terminal',
      },
      {
        name: 'PHPUnit'
      },
      {
        name: 'AWS: EC2, RDS, ELB e S3'
      }
    ]);
   }

  ngOnInit() {
  }


  public showAdditionalInfo: boolean = true;

  public toggleAdditionalInfo() {
    this.showAdditionalInfo = !this.showAdditionalInfo;
  }

}