import { Project } from "../shared/models/project.model";
import { FeaturedProject } from "../shared/models/featured-project.model";
import { Injectable } from "@angular/core";


@Injectable()
export class ProjectService {
    
    private apiUrl = 'http://localhost:3000'
    
    private async getFeaturedProjects(): Promise<FeaturedProject[]> {
        try {
            const request = fetch(`${this.apiUrl}/featured_projects`)
            const response = await request
            const data = await response.json()
            return data
        } catch {
            return null
        }
    }
    
    private async getMinorProjects(): Promise<Project[]> {
        try {
            const request = fetch(`${this.apiUrl}/minor_projects`)
            const response = await request
            const data = await response.json()
            return data
        } catch {
            return null
        }
    }

    public async getProjects(): Promise<[FeaturedProject[], Project[]]> {
        const featuredProjects = await this.getFeaturedProjects()
        const minorProjects = await this.getMinorProjects();

        return [featuredProjects, minorProjects];
    }
}