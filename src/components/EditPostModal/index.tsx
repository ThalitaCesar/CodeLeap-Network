import {FormEvent, useState} from 'react';
import Modal from 'react-modal';
import {usePosts} from '../../context/ApiContext/usePosts';
import {Container} from './style';
import {Post} from '../../services/api';

const customStyles = {
    content: {
        width: '80%',
        height: '500px',
        maxWidth: '600px',
        background: 'var(--light-blue)',
        border: 'none',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        overflow: 'auto'
    }
};

interface EditPostModalProps {
    isOpen : boolean;
    onRequestClose : () => void;
    Post : Post;
}

export function EditPostModal({isOpen, onRequestClose, Post} : EditPostModalProps) {
    const {updatePost} = usePosts();
    const [id,
        setId] = useState(Post.id);
    const [title,
        setTitle] = useState(Post.title);
    const [content,
        setContent] = useState(Post.content);

    async function handleEditPost(event : FormEvent) {
        event.preventDefault();
        await updatePost(id, title, content);
        onRequestClose();
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            style={customStyles}>

            <Container onSubmit={handleEditPost}>
                <div
                    style={{
                    display: 'flex',
                    alignItems: "center",
                    justifyContent: "space-between"
                }}>
                    <h2>Edit Post</h2>
                    <button
                        onClick={onRequestClose}
                        style={{
                        background: "none",
                        border: 'none',
                        fontSize: "24px",
                        marginRight: "10px"
                    }}>
                        X
                    </button>
                </div>

                <input
                    placeholder="Title"
                    value={title}
                    onChange={event => setTitle(event.target.value)}/>
                <textarea
                    placeholder="Content"
                    value={content}
                    onChange={event => setContent(event.target.value)}/>

                <button type="submit">Save</button>
            </Container>
        </Modal>
    );
}