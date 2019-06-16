import { Project } from "./project.model";

export class FeaturedProject extends Project {
    constructor(
        id: number,
        titulo: string,
        techUsed: string[],
        gitUrl: string,
        imageUrls: string[],
        public description: string,
        public status: string,
        public percentageComplete: number,
        public deployUrl: string
    ) { 
        super(id, titulo, techUsed, gitUrl, imageUrls)
    }
}