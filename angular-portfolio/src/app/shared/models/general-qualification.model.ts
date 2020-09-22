export interface IGeneralQualification {
    name: string,
    yearsExperience?: number,
}

export class GeneralQualification  {

    private constructor() { }

    public static createGeneralQualification({ name, yearsExperience }: any): IGeneralQualification {
        return { name, yearsExperience };
    }

    public static createGeneralQualifications(data: any[]): IGeneralQualification[] {
        return data.map(GeneralQualification.createGeneralQualification);
    }
}