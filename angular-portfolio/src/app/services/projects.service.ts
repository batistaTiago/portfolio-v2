import { Project } from "../shared/models/project.model";
import { FeaturedProject } from "../shared/models/featured-project.model";
import { Injectable } from "@angular/core";
import { BTConstants } from '../app.constants'

@Injectable()
export class ProjectService {

    private featuredMocks: FeaturedProject[] = [
        {
            "id": 0,
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

    private minorMocks: Project[] = [
        {
            "id": 1,
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
            "id": 2,
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

    private async getFeaturedProjects(): Promise<FeaturedProject[]> {
        try {
            console.log(`enviando request para: ${BTConstants.apiURL}/api/projects/featured` )
            const request = fetch(`${BTConstants.apiURL}/api/projects/featured`, { mode: 'cors' })
            const response = await request
            const data = await response.json()
            console.log('request funcionou', data)

            return data.payload.map(element => {
                return new FeaturedProject(
                    element.projectId,
                    element.titulo,
                    []                    ,
                    element.gitURL,
                    element.photos,
                    element.descricao,
                    element.status,
                    element.percentageComplete,
                    element.deployURL
                )
            });
        } catch {
            console.log('retornando mocks - featured')
            return null
        } 
        
    }

    private async getMinorProjects(): Promise<Project[]> {
        try {
            console.log(`enviando request para: ${BTConstants.apiURL}/api/projects/minor` )
            const request = fetch(`${BTConstants.apiURL}/api/projects/minor`, { mode: 'cors' })
            const response = await request
            const data = await response.json()
            console.log('request funcionou', data)
            return data.payload.map(element => {
                return new Project(
                    element.projectId,
                    element.titulo,
                    [],
                    element.gitURL,
                    element.photos,
                )
            })
        } catch {
            console.log('retornando mocks - minor')
            return this.minorMocks
        }
    }

    public async getProjects(): Promise<[FeaturedProject[], Project[]]> {
        const featuredProjects = await this.getFeaturedProjects()
        const minorProjects = await this.getMinorProjects();

        return [featuredProjects, minorProjects];
        
    }
}