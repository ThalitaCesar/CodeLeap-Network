import {ReactNode} from 'react';

interface Post {
    id : string;
    title : string;
    username : string;
    content : string;
}

type PostInput = Omit < Post,
'id' | 'created_datetime' >;

interface PostsProviderProps {
    children : ReactNode;
}

interface ApiContextData {
    Posts : Post[];
    createPost(Post : PostInput) : Promise < void >;
    editPost(Post : Post) : Promise < void >;
    deletePost(id : string) : Promise < void >;
}

export type {
    Post,
    PostInput,
    PostsProviderProps,
    ApiContextData
};