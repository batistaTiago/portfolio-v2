export interface ISocialMedia {
    iconClass: string,
    linkTitle: string,
    url: string
}

export class SocialMedia  {

    private constructor() { }

    public static createSocialMedia({ iconClass, linkTitle, url }: any): ISocialMedia {
        return { iconClass, linkTitle, url };
    }

    public static createSocialMedias(data: any[]): ISocialMedia[] {
        return data.map(SocialMedia.createSocialMedia);
    }
}