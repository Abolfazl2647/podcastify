type PostTagType = string[];

export interface IPostItem {
    id: number;
    title: string;
    body: string;
    tags: PostTagType;
    reactions: {
        likes: number;
        dislikes: number;
    };
    views: number;
    userId: number;
}

export interface IPostListResponse {
    posts: IPostItem[];
    total: number;
    skip: number;
    limit: number;
}
