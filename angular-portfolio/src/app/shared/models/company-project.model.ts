export interface ICompanyProject {
    projectId: number
    titulo: string
    techUsed: string[]
    description: string
    deployUrl: string
    companyName: string
}


export class CompanyProject {

    private constructor() { }

    public static createCompanyProject({ projectId, titulo, techUsed, description, deployUrl, companyName }: any): ICompanyProject {
        return { projectId, titulo, techUsed, description, deployUrl, companyName };
    }

    public static createCompanyProjects(data: any[]): ICompanyProject[] {
        return data.map(CompanyProject.createCompanyProject);
    }
}