import {FormEvent, useState} from "react";
import {Container} from "./styles";
import {usePosts} from "../../context/ApiContext/usePosts";

export function NewPost() {

    const {createPost} = usePosts();

    const [title,
        setTitle] = useState('');
    const [content,
        setContent] = useState('');
    const [username,
        setUsername] = useState('usuário_teste');

    function handleCreateNewPost(event : FormEvent) {
        event.preventDefault();
        createPost(username, title, content);
        setTitle('');
        setContent('');
    }

    return (
        <Container onSubmit={handleCreateNewPost}>
            <h2>What’s on your mind?</h2>
            <input
                placeholder="Title"
                value={title}
                onChange={event => setTitle(event.target.value)}/>
            <textarea
                placeholder="Content"
                value={content}
                onChange={event => setContent(event.target.value)}/>
            <button type="submit">Create</button>
        </Container>
    )
}