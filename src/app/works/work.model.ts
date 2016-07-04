export interface IImage {
    title?: string;
    image: string;
}
export interface IWork {
    title: string;
    type: number;
    description: string;
    cover: string;
    images: IImage[];
    created: number;
    url?: string;
}