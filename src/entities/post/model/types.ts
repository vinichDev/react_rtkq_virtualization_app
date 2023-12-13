export interface IPost {
    id: number,
    title: string,
    body: string,
}

export interface IPostQueryArgs {
    id: number,
}

export interface IPostsQueryArgs {
    limit: number,
    start: number
}