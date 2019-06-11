// import { Project } from "../shared/models/project.model";
// import { FeaturedProject } from "../shared/models/featured-project.model";
// import { Injectable } from "@angular/core";
// import { Observable } from 'rxjs';
// import { HttpClient } from '@angular/common/http';


// @Injectable()
// export class ProjectService {

//     private apiUrl = 'http://localhost:3000'
//     private featuredProjectsObservable: Observable<FeaturedProject[]>
//     private minorProjectsObservable: Observable<FeaturedProject[]>

//     constructor(private httpClient: HttpClient) { 
//         this.featuredProjectsObservable = this.getFeaturedProjects()
//         this.minorProjectsObservable = this.getMinorProjects()
//     }

//     private getFeaturedProjects(): any {
//         return this.httpClient.get(`${this.apiUrl}/featured_projects`)
//     }

//     private getMinorProjects(): any {
//         return this.httpClient.get(`${this.apiUrl}/minor_projects`)
//     }

//     public getProjectObservables(): [Observable<FeaturedProject[]>, Observable<Project[]>] {
//         return [this.featuredProjectsObservable, this.minorProjectsObservable]
//     }

//     private featuredMocks: FeaturedProject[] = [
//         {
//             "id": 0,
//             "titulo": "Pássaro Urbano",
//             "techUsed": [
//                 "HTML",
//                 "CSS",
//                 "TypeScript",
//                 "Bootstrap",
//                 "jQuery",
//                 "Angular",
//                 "Firebase"
//             ],
//             "gitUrl": "https://github.com/batistatiago/passaro-urbano",
//             "imageUrls": [
//                 "/assets/images/passaro-urbano/passaro-urbano1.png",
//                 "/assets/images/passaro-urbano/passaro-urbano2.png",
//                 "/assets/images/passaro-urbano/passaro-urbano3.png"
//             ],
//             "status": "Em desenvolvimento",
//             "percentageComplete": 60,
//             "description": "Web app baseado no Peixe Urbano. O app oferece a possibilidade de criar cadastro (consumidor / anunciante), publicar, editar e deletar ofertas (caso o usuário seja um anunciante) e realizar compras. Além disso, o app também é integrado a uma API de CEPs, fazendo a busca de endereço automaticamente utilizando abordagem AJAX. ",
//             "deployUrl": "http://batista-tiago-ekyidag.s3-website-sa-east-1.amazonaws.com"
//         }
//     ]

//     private minorMocks: Project[] = [
//         {
//             "id": 1,
//             "titulo": "Spotify Clone",
//             "techUsed": [
//                 "HTML",
//                 "CSS",
//                 "Bootstrap",
//                 "jQuery"
//             ],
//             "gitUrl": "",
//             "imageUrls": ["/assets/images/minor-projects/spotify-clone/1.png"]
//         },
//         {
//             "id": 1,
//             "titulo": "Mountain Travel",
//             "techUsed": [
//                 "HTML",
//                 "CSS"
//             ],
//             "gitUrl": "",
//             "imageUrls": [
//                 "/assets/images/minor-projects/mountain-travel/1.png",
//                 "/assets/images/minor-projects/mountain-travel/2.png",
//                 "/assets/images/minor-projects/mountain-travel/3.png",
//                 "/assets/images/minor-projects/mountain-travel/4.png"
//             ]
//         }
//     ]
// }


import { Project } from "../shared/models/project.model";
import { FeaturedProject } from "../shared/models/featured-project.model";
import { Injectable } from "@angular/core";


@Injectable()
export class ProjectService {

    private apiUrl = 'http://localhost:3000'

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
            "description": "Web app baseado no Peixe Urbano. O app oferece a possibilidade de criar cadastro (consumidor / anunciante), publicar, editar e deletar ofertas (caso o usuário seja um anunciante) e realizar compras. Além disso, o app também é integrado a uma API de CEPs, fazendo a busca de endereço automaticamente utilizando abordagem AJAX. ",
            "deployUrl": "http://batista-tiago-ekyidag.s3-website-sa-east-1.amazonaws.com"
        }
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
            "id": 1,
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
            const request = fetch(`${this.apiUrl}/featured_projects`)
            const response = await request
            const data = await response.json()
            return data
        } catch {
            console.log('retornando mocks - featured')
            return this.featuredMocks
        } 
        
    }

    private async getMinorProjects(): Promise<Project[]> {
        try {
            const request = fetch(`${this.apiUrl}/minor_projects`)
            const response = await request
            const data = await response.json()
            return data
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