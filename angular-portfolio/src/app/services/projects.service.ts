import { IProject, Project } from "../shared/models/project.model";
import { IFeaturedProject, FeaturedProject } from "../shared/models/featured-project.model";
import { Injectable } from "@angular/core";
import { environment } from '../../environments/environment'

@Injectable()
export class ProjectService {

    private featuredMocks: IFeaturedProject[] = [
        {
            "projectId": 0,
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
            "imageUrls": [
                "/assets/images/passaro-urbano/passaro-urbano1.png",
                "/assets/images/passaro-urbano/passaro-urbano2.png",
                "/assets/images/passaro-urbano/passaro-urbano3.png"
            ],
            "status": "Em desenvolvimento",
            "percentageComplete": 60,
            
            "description": 
                `Web app baseado no Peixe Urbano. 
                O app oferece a possibilidade de criar cadastro (consumidor / anunciante), publicar, editar e deletar ofertas (caso o usuário seja um anunciante) e realizar compras. 
                Além disso, o app também é integrado a uma API de CEPs, fazendo a busca de endereço automaticamente utilizando abordagem AJAX.`,
                
            "deployUrl": "http://batista-tiago-ekyidag.s3-website-sa-east-1.amazonaws.com"
        },
        // {
        //     "id": 3,
        //     "titulo": "Portfólio",
        //     "techUsed": [
        //         "HTML",
        //         "SASS",
        //         "TypeScript",
        //         "Angular",
        //         "NodeJS",
        //         "Express",
        //         "MySQL"
        //     ],
        //     "gitUrl": "",
        //     "imageUrls": [
        //     ],
        //     "status": "Em desenvolvimento",
        //     "percentageComplete": 95,

        //     "description": 
        //         `Este portfólio é uma aplicação full-stack simples. 
        //         Além do front-end aqui apresentado, ele conta com uma REST API que fornece as informações dinamicamente para a página de projetos e integra a página de contato com o servidor SMTP do Gmail através do NodeMailer.
        //         `,

        //     "deployUrl": ""
        // }
    ]

    private minorMocks: IProject[] = [
        {
            "projectId": 1,
            "titulo": "Spotify Clone",
            "techUsed": [
                "HTML",
                "CSS",
                "Bootstrap",
                "jQuery"
            ],
            "gitUrl": "",
            "imageUrls": ["/assets/images/minor-projects/spotify-clone/1.png"]
        },
        {
            "projectId": 2,
            "titulo": "Mountain Travel",
            "techUsed": [
                "HTML",
                "CSS"
            ],
            "gitUrl": "",
            "imageUrls": [
                "/assets/images/minor-projects/mountain-travel/1.png",
                "/assets/images/minor-projects/mountain-travel/2.png",
                "/assets/images/minor-projects/mountain-travel/3.png",
                "/assets/images/minor-projects/mountain-travel/4.png"
            ]
        }
    ]

    private async getFeaturedProjects(): Promise<IFeaturedProject[]> {
        try {
            // console.log(`enviando request para: ${environment.apiURL}/api/projects/featured` )
            const request = fetch(`${environment.apiURL}/api/projects/featured`, { mode: 'cors' })
            const response = await request
            const data = await response.json()
            // console.log('request funcionou', data)

            
            // const proj = FeaturedProject.createFeaturedProjects(data.payload)
            // console.log(data.payload)
            // console.log(proj)
            // return proj

            return FeaturedProject.createFeaturedProjects(data.payload)

        } catch {
            console.log('retornando mocks - featured')
            return this.featuredMocks
        } 
        
    }

    private async getMinorProjects(): Promise<IProject[]> {
        try {
            // console.log(`enviando request para: ${environment.apiURL}/api/projects/minor` )
            const request = fetch(`${environment.apiURL}/api/projects/minor`, { mode: 'cors' })
            const response = await request
            const data = await response.json()

            // console.log(data.payload)

            // const proj = Project.createProjects(data.payload)
            // console.log(data.payload[0])
            // console.log(proj[0])
            // return proj

            return Project.createProjects(data.payload)
        } catch {
            console.log('retornando mocks - minor')
            return this.minorMocks
        }
    }

    public async getProjects(): Promise<[IFeaturedProject[], IProject[]]> {
        const featuredProjects = await this.getFeaturedProjects()
        const minorProjects = await this.getMinorProjects();

        return [featuredProjects, minorProjects];
        
    }
}