import { IProject, Project } from "../shared/models/project.model";
import { IFeaturedProject, FeaturedProject } from "../shared/models/featured-project.model";
import { Injectable } from "@angular/core";
import { environment } from '../../environments/environment'

@Injectable()
export class ProjectService {

    private featuredMocks: IFeaturedProject[] = [
        {
            "projectId": 1,
            "titulo": "Natal Empregos",
            "techUsed": [
                "Laravel",
                "MySQL",
                "jQuery",
                "Docker/compose"
            ],
            "gitUrl": "https://github.com/batistatiago/natal-empregos-containerized",
            "imageUrls": [
                "/assets/images/natal-empregos/NE-1.png",
                "/assets/images/natal-empregos/NE-2.png"
            ],
            "status": "Em desenvolvimento",
            "percentageComplete": 70,
            
            "description": 
                `Projeto Real, feito para uma cliente de Natal/RN para candidatos a vagas de emprego na cidade.`,
                
            "deployUrl": "https://natal-empregos.herokuapp.com"
        },
        
        {
            "projectId": 2,
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
            "percentageComplete": 59,
            
            "description": 
                `Web app baseado no Peixe Urbano. 
                O app oferece a possibilidade de criar cadastro (consumidor / anunciante), publicar, editar e deletar ofertas (caso o usuário seja um anunciante) e realizar compras. 
                Além disso, o app também é integrado a uma API de CEPs, fazendo a busca de endereço automaticamente utilizando abordagem AJAX.`,
                
            "deployUrl": "http://batista-tiago-ekyidag.s3-website-sa-east-1.amazonaws.com"
        },

        {
            "projectId": 3,
            "titulo": "Authentication Microservice",
            "techUsed": [
                "NodeJS",
                "MongoDB",
                "Docker/compose",
                "Redis",
                "Python",
                "JWT"
            ],
            "gitUrl": "https://github.com/batistatiago/passaro-urbano",
            "imageUrls": [],
            "status": "Em desenvolvimento",
            "percentageComplete": 40,
            
            "description": 
                `Microserviço de autenticação e gestão de usuários.
                O serviço conta com uma fila de emails implementada no Redis e workers escritos em python para envio dos emails de confirmação de cadastro e redefinição de senha`,
                
            "deployUrl": "http://batista-tiago-ekyidag.s3-website-sa-east-1.amazonaws.com"
        }
    ]

    private minorMocks: IProject[] = [
        {
            "projectId": 2,
            "titulo": "Spotify Clone",
            "techUsed": [
                "HTML",
                "CSS",
                "Bootstrap",
                "jQuery"
            ],
            "gitUrl": "https://github.com/batistaTiago/web-module-1/tree/master/spotify-clone",
            "imageUrls": ["/assets/images/minor-projects/spotify-clone/1.png"]
        },
        {
            "projectId": 3,
            "titulo": "Mountain Travel",
            "techUsed": [
                "HTML",
                "CSS"
            ],
            "gitUrl": "https://github.com/batistaTiago/web-module-4/tree/master/mountains-project",
            "imageUrls": [
                "/assets/images/minor-projects/mountain-travel/1.png",
                "/assets/images/minor-projects/mountain-travel/2.png",
                "/assets/images/minor-projects/mountain-travel/3.png",
                "/assets/images/minor-projects/mountain-travel/4.png"
            ]
        }
    ]

    private async getFeaturedProjects(): Promise<IFeaturedProject[]> {
        
        return this.featuredMocks
        
        try {
            console.log(`enviando request para: ${environment.apiURL}/api/projects/featured` )
            const request = fetch(`${environment.apiURL}/api/projects/featured`, { mode: 'cors' })
            const response = await request
            const data = await response.json()

            return FeaturedProject.createFeaturedProjects(data.payload)

        } catch {
            console.log('retornando mocks - featured')
            return this.featuredMocks
        } 
        
    }

    private async getMinorProjects(): Promise<IProject[]> {
        
        return this.minorMocks
        
        try {
            console.log(`enviando request para: ${environment.apiURL}/api/projects/minor` )
            const request = fetch(`${environment.apiURL}/api/projects/minor`, { mode: 'cors' })
            const response = await request
            const data = await response.json()

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