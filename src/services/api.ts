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
    next?: string;
}

const apiUrl = 'https://dev.codeleap.co.uk/careers/';

const createApi = () => {
    axios.defaults.baseURL = apiUrl;
    axios.defaults.headers.common['Content-Type'] = 'application/json';
};

export {createApi};

async function getAllPosts(limit: number = 10, offset: number = 0): Promise<Post[]> {
    const response: AxiosResponse<PostResponse> = await axios.get(`${apiUrl}?limit=${limit}&offset=${offset}`);
    if (response.data.next) {
        const nextOffset = new URL(response.data.next).searchParams.get('offset');
        const nextPage = await getAllPosts(limit, parseInt(nextOffset || "0"));
      response.data.results.push(...nextPage);
    }
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
