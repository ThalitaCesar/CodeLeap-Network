import {FormEvent} from 'react';
import Modal from 'react-modal';
import {usePosts} from '../../context/ApiContext/usePosts';
import {Container} from './style';
import {Post} from '../../services/api';

const customStyles = {
    content: {
        width: '80%',
        height: '350px',
        maxWidth: '600px',
        background: 'var(--light-blue)',
        border: 'none',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        overflow: 'auto'
    }
};

interface DeletePostModalProps {
    isOpen : boolean;
    onRequestClose : () => void;
    Post : Post;
}

export function DeletePostModal({isOpen, onRequestClose, Post} : DeletePostModalProps) {
    const {deletePost} = usePosts();
    const {id, title} = Post;

    async function handleDeletePost(event : FormEvent) {
        event.preventDefault();
        await deletePost(id);
        onRequestClose();
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            style={customStyles}>

            <Container onSubmit={handleDeletePost}>
                <div
                    style={{
                    display: 'flex',
                    alignItems: "center",
                    justifyContent: "space-between"
                }}>
                    <h2>Delete Post</h2>
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

                <p>Are you sure you want to delete the post
                    <strong>
                        {" " + `${title}`}
                    </strong>?</p>

                <button type="submit">Delete</button>
            </Container>
        </Modal>
    );
}