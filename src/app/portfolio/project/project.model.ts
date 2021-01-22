export class Project {
    public name: string;
    public description: string;
    public imagePath: string;
    public tag: string;
    public slug: string;
    public liveURL: string;
    public tech: string;

    constructor(name: string, desc: string, img: string, tag: string, slug: string, live: string, tech: string) {
        this.name = name;
        this.description = desc;
        this.imagePath = img;
        this.tag = tag;
        this.slug = slug;
        this.liveURL = live;
        this.tech = tech;
    }
}