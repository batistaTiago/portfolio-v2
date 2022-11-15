import { IProject, Project } from "../shared/models/project.model";
import { IFeaturedProject, FeaturedProject } from "../shared/models/featured-project.model";
import { Injectable } from "@angular/core";
import { environment } from '../../environments/environment'
import { ICompanyProject } from '../shared/models/company-project.model';

@Injectable()
export class ProjectService {

    private featuredMocks: IFeaturedProject[] = [
        {
            "projectId": 1,
            "titulo": "MFA App",
            "techUsed": [
                "NodeJS",
                "ReactJS",
                "Typescript",
                "Kafka",
                "MongoDB",
                "Jest",
                "React Testing Library",
                "Redis",
                "MySQL",
                "Docker",
            ],
            "gitUrl": "https://github.com/batistaTiago/typescript-kafka-clean-api",
            "imageUrls": [
                "/assets/images/mfa-app/home.jpeg",
                "/assets/images/mfa-app/signup.jpeg",
                "/assets/images/mfa-app/login.jpeg",
                "/assets/images/mfa-app/notfound.jpeg",
            ],
            "colabs": [
                {
                    nome: 'Nicholas Tavares',
                    gitUrlProfile: 'https://github.com/NicholasTavares'
                }
            ],
            "status": "Under construction",
            "percentageComplete": 65,
            
            "realProject": true,
            "description": 
                `Multi-factor Authentication (MFA) is an authentication method that requires the user to provide two or more verification factors to gain access to a resource. This app can be used to serve as a MFA provider.`,
                
            "deployUrl": null
        },
    ]

    private minorMocks: IProject[] = [
        {
            "projectId": 1,
            "titulo": "Pássaro Urbano",
            "techUsed": [
                "HTML",
                "CSS",
                "TypeScript",
                "Bootstrap",
                "jQuery",
                "Angular",
                "Firebase"
            ],
            "gitUrl": "https://github.com/batistatiago/passaro-urbano",
            "imageUrls": ["/assets/images/passaro-urbano/passaro-urbano1.png"],
        },
        {
            "projectId": 2,
            "titulo": "Natal Empregos",
            "techUsed": [
                "Laravel",
                "MySQL",
                "jQuery",
                "Docker"
            ],
            "gitUrl": "https://github.com/batistatiago/natal-empregos-containerized",
            "imageUrls": ["/assets/images/natal-empregos/NE-1.png"],
        },
        {
            "projectId": 3,
            "titulo": "Spotify Clone",
            "techUsed": [
                "HTML",
                "CSS",
                "Bootstrap",
                "jQuery"
            ],
            "gitUrl": "https://github.com/batistaTiago/web-module-1/tree/master/spotify-clone",
            "imageUrls": ["/assets/images/minor-projects/spotify-clone/1.png"],
        },
        {
            "projectId": 4,
            "titulo": "Mountain Travel",
            "techUsed": [
                "HTML",
                "CSS"
            ],
            "gitUrl": "https://github.com/batistaTiago/web-module-4/tree/master/mountains-project",
            "imageUrls": ["/assets/images/minor-projects/mountain-travel/1.png"],
        }
    ]

    // @@TODO: colocar varios paragrafos dinamicamente para cada linha do campo description
    private companyMocks = [
        {
            "projectId": 1,
            "titulo": "TMS Olist Pax",
            "techUsed": [
                "Laravel",
                "MySQL",
                "Kafka",
                "Redis",
                "Docker",
                "Kubernetes",
                "Gitlab CI",
                "AWS",
            ],
            
            "description": `
                Nation-wide TMS (Transportation Management System). Serves as a logistics gate for many e-commerce and marketplaces, such as Amazon, Shopee, Carrefour, VTEX, among others. The system is responsible for all the logistics management, from driver onboarding and payment to the PnD (Pickup and Delivery) operation itself.
                The operations run at around 50 thousand packages a day, working 24 hours a day and 7 days a week.
            `,
                
            "deployUrl": "https://olistpax.com",
            "companyName": "Olist Serviços Digitais"
        },
        {
            "projectId": 2,
            "titulo": "LessClick Ticketing",
            "techUsed": [
                "Laravel",
                "MySQL",
                "jQuery",
                "SASS",
                "Redis",
                "Firebase",
                "Google Pay",
            ],
            
            "description": `
                Ticketing system responsible for selling events at Arena das Dunas (Natal/RN), Arena Fonte Nova (Salvador/BA) and Arena Portoalegrense (Porto Alegre/RS) stadiums, in addition to other independent C2C event producers. The system has around 400 thousand users, adding up to the general audience of the 3 stadiums, but a typical soccer match sells around 50 thousand tickets.
                In this project, I was mainly responsible for all of the architecture and back-end development of of the system, including as database modeling, REST API development, integrations with third-party services (PayPal, GooglePay, GoogleMaps, GetNet, ClearSale, Firebase, and others), authentication (and authorization).
                I was also responsible for most of the front-end development of the management module, which has reports, dashboards, event and  tickets settings as well as for managing the staging infrastructure (AWS) used.
            `,
                
            "deployUrl": "https://web.lessclick.com.br",
            "companyName": "LessClick"
        }
    ]

    private async getFeaturedProjects(): Promise<IFeaturedProject[]> {
        
        return this.featuredMocks;
        
        // try {
        //     console.log(`enviando request para: ${environment.apiURL}/api/projects/featured` )
        //     const request = fetch(`${environment.apiURL}/api/projects/featured`, { mode: 'cors' })
        //     const response = await request
        //     const data = await response.json()

        //     return FeaturedProject.createFeaturedProjects(data.payload)

        // } catch {
        //     console.log('retornando mocks - featured')
        //     return this.featuredMocks
        // } 
        
    }

    private async getMinorProjects(): Promise<IProject[]> {
        
        return this.minorMocks;
        
        // try {
        //     console.log(`enviando request para: ${environment.apiURL}/api/projects/minor` )
        //     const request = fetch(`${environment.apiURL}/api/projects/minor`, { mode: 'cors' })
        //     const response = await request
        //     const data = await response.json()

        //     return Project.createProjects(data.payload)
        // } catch {
        //     console.log('retornando mocks - minor')
        //     return this.minorMocks
        // }
    }

    private async getCompanyProjects(): Promise<ICompanyProject[]> {
        
        return this.companyMocks;
        
        // try {
        //     console.log(`enviando request para: ${environment.apiURL}/api/projects/minor` )
        //     const request = fetch(`${environment.apiURL}/api/projects/minor`, { mode: 'cors' })
        //     const response = await request
        //     const data = await response.json()

        //     return Project.createProjects(data.payload)
        // } catch {
        //     console.log('retornando mocks - minor')
        //     return this.minorMocks
        // }
    }

    public async getProjects(): Promise<[IFeaturedProject[], IProject[], ICompanyProject[]]> {
        const featuredProjects = await this.getFeaturedProjects();
        const minorProjects = await this.getMinorProjects();
        const companyProjects = await this.getCompanyProjects();

        return [featuredProjects, minorProjects, companyProjects];
        
    }
}