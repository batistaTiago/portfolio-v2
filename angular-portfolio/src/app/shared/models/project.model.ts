export class Project {
    constructor(
        public id: number,
        public titulo: string,
        public techUsed: string[],
        public gitUrl: string,
        public imageUrls: string[]
    ) { }
}