export interface IBook{
    id: string,
    selfLink: string,
    volumeInfo: {
        id:string,
        title: string,
        authors: [],
        previewLink: string,
        imageLinks:{
            thumbnail:string,
            smallThumbnail:string
        },
        description:string,
        categories:[string]
    }
}