import axios, {AxiosResponse} from 'axios';

export interface Post {
    id : number;
    username : string;
    created_datetime : string;
    title : string;
    content : string;
}

export interface PostResponse {
    results : Post[];
}

const apiUrl = 'https://dev.codeleap.co.uk/careers/';

const createApi = () => {
    axios.defaults.baseURL = apiUrl;
    axios.defaults.headers.common['Content-Type'] = 'application/json';
};

export {createApi};

async function getAllPosts() : Promise < Post[] > {
    const response: AxiosResponse < PostResponse > = await axios.get(apiUrl);
    return response.data.results;
}

async function createPost(username : string, title : string, content : string) : Promise < Post > {
    const postData = {
        username,
        title,
        content
    };
    const response: AxiosResponse < Post > = await axios.post(apiUrl, postData);
    return response.data;
}

async function updatePost(id : number, title : string, content : string) : Promise < Post > {
    const putUrl = `${apiUrl}${id}/`;
    const putData = {
        title,
        content
    };
    const response: AxiosResponse < Post > = await axios.patch(putUrl, putData);
    return response.data;
}

async function deletePost(id : number) : Promise < void > {
    const deleteUrl = `${apiUrl}${id}/`;
    await axios.delete(deleteUrl);
}

export {getAllPosts, createPost, updatePost, deletePost};
