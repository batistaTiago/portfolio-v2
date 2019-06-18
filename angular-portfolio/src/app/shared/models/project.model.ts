export interface IProject {
    projectId: number
    titulo: string
    techUsed: string[]
    gitUrl: string
    imageUrls: string[]
}

export class Project  {

    private constructor() { }

    public static createProject({ projectId, titulo, techUsed, gitUrl, imageUrls }: any): IProject {
        return { projectId, titulo, techUsed, gitUrl, imageUrls }
    }

    public static createProjects(data: any[]): IProject[] {
        return data.map(Project.createProject)
    }
}