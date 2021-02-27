export interface ICourse {
    courseTitle: string,
    linkTitle: string,
    url: string
}

export class Course  {

    private constructor() { }

    public static createCourse({ courseTitle, linkTitle, url }: any): ICourse {
        return { courseTitle, linkTitle, url };
    }

    public static createCourses(data: any[]): ICourse[] {
        return data.map(Course.createCourse);
    }
}