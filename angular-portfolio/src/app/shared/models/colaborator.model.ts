export interface IColaborator {
    nome: number
    gitUrlProfile: string
}


export class Colaborator {

    private constructor() { }

    public static createColaborator({ nome, gitUrlProfile }: any): IColaborator {
        return { nome, gitUrlProfile };
    }

    public static createFeaturedProjects(data: any[]): IColaborator[] {
        return data.map(Colaborator.createColaborator)
    }
}