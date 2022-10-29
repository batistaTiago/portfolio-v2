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
            "titulo": "2FA App",
            "techUsed": [
                "Typescript",
                "NodeJS",
                "Kafka",
                "Redis",
                "MySQL",
                "MongoDB",
                "Docker",
            ],
            "gitUrl": "https://github.com/batistaTiago/typescript-kafka-clean-api",
            "imageUrls": [],
            "colabs": [
                {
                    nome: 'abilioN',
                    gitUrlProfile: 'https://github.com/abilioN'
                }
            ],
            "status": "Em desenvolvimento",
            "percentageComplete": 35,
            
            "realProject": true,
            "description": 
                `Projeto feito para uma Cliente de Natal/RN para candidatos a vagas de emprego na cidade.`,
                
            "deployUrl": null
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
            "imageUrls": [
                "/assets/images/natal-empregos/NE-1.png",
                "/assets/images/natal-empregos/NE-2.png"
            ],
            "colabs": [
                {
                    nome: 'abilioN',
                    gitUrlProfile: 'https://github.com/abilioN'
                },
                {
                    nome: 'lucaslaricchia',
                    gitUrlProfile: 'https://github.com/lucaslaricchia'
                },
                {
                    nome: 'danieelvaraujo',
                    gitUrlProfile: 'https://github.com/danieelvaraujo'
                }
            ],
            "status": "Em desenvolvimento",
            "percentageComplete": 70,
            
            "realProject": true,
            "description": 
                `Projeto feito para uma Cliente de Natal/RN para candidatos a vagas de emprego na cidade.`,
                
            "deployUrl": "https://natal-empregos.herokuapp.com"
        },

        {
            "projectId": 3,
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
            "colabs": [],
            "status": "Em desenvolvimento",
            "percentageComplete": 60,
            
            "realProject": false,
            "description": 
                `Web app baseado no Peixe Urbano. 
                O app oferece a possibilidade de criar cadastro (consumidor / anunciante), publicar, editar e deletar ofertas (caso o usuário seja um anunciante) e realizar compras. 
                Além disso, o app também é integrado a uma API de CEPs, fazendo a busca de endereço automaticamente utilizando abordagem AJAX.`,
                
            "deployUrl": "http://batista-tiago-ekyidag.s3-website-sa-east-1.amazonaws.com"
        },

        {
            "projectId": 4,
            "titulo": "Authentication Microservice",
            "techUsed": [
                "NodeJS",
                "MongoDB",
                "Docker",
                "Redis",
                "Python",
                "JWT"
            ],
            "gitUrl": "https://github.com/batistatiago/bt-authentication-microservice",
            "imageUrls": [
                '/assets/images/auth-microservice/fluxograma.png'
            ],
            "colabs": [],
            "status": "Em desenvolvimento",
            "percentageComplete": 40,
            
            "realProject": false,
            "description": 
                `Microserviço de autenticação e gestão de usuários.
                O serviço conta com uma fila de emails implementada no Redis e workers escritos em python para envio dos emails de confirmação de cadastro e redefinição de senha`,
                
            "deployUrl": null
        }
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
            "gitUrl": "https://github.com/batistaTiago/web-module-1/tree/master/spotify-clone",
            "imageUrls": ["/assets/images/minor-projects/spotify-clone/1.png"]
        },
        {
            "projectId": 2,
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


    private companyMocks = [
        {
            "projectId": 1,
            "titulo": "Bilheteria LessClick",
            "techUsed": [
                "Laravel",
                "MySQL",
                "jQuery",
                "SASS",
                "Redis",
                "OAuth2"
            ],
            
            "description": `
                Sistema de bilhetagem responsável por venda de eventos nos estádios Arena das Dunas (Natal/RN), Arena Fonte Nova (Salvador/BA) e Arena Portoalegrense (Porto Alegre/RS), além de outras produtoras independentes que utilizam a solução. O sistema tem cerca de 200 mil usuários somando o público dos 3 estádios. <br />
                Neste projeto, fui o principal responsável pela arquitetura e desenvolvimento back-end da maior parte do sistema, como modelagem do banco de dados, integrações com serviços terceiros (PayPal, GooglePay, GoogleMaps, GetNet, ClearSale, FirebaseAuth, etc), implementação do protocolo OAuth2 para comunicação com as aplicações-cliente Web e Pontos de Venda internos dos estádios. 
                Além disso, também fui responsável por boa parte do desenvolvimento front-end do módulo de administração, que conta com relatórios, dashboards, configurações de eventos, ingressos, etc. 
                Também fui o principal responsável pela administração do servidor de homologação utilizado.
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