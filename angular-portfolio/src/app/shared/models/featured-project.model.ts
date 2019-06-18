import { IProject } from "./project.model";

export interface IFeaturedProject extends IProject {
    projectId: number
    titulo: string
    techUsed: string[]
    gitUrl: string
    imageUrls: string[]
    description: string
    status: string
    percentageComplete: number
    deployUrl: string
}


export class FeaturedProject {

    private constructor() { }

    public static createFeaturedProject({ projectId, titulo, techUsed, gitUrl, imageUrls, description, status, percentageComplete, deployUrl }: any): IFeaturedProject {
        return { projectId, titulo, techUsed, gitUrl, imageUrls, description, status, percentageComplete, deployUrl }
    }

    public static createFeaturedProjects(data: any[]): IFeaturedProject[] {
        return data.map(FeaturedProject.createFeaturedProject)
    }
}