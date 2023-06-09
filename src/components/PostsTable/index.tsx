import {Pencil, Trash} from "phosphor-react";
import {usePosts} from "../../context/ApiContext/usePosts";
import {
    Container,
    Content,
    DateAgo,
    Icons,
    Title,
    Username
} from "./styles";
import {useState, useEffect} from "react";
import {EditPostModal} from "../EditPostModal";
import {DeletePostModal} from "../DeletePostModal";
import {Post} from '../../services/api';
import {Pagination} from "../Pagination";
import {format, formatDistanceToNow} from "date-fns";

interface PostsTableProps {
    isOpen?: boolean;
}

export function PostsTable({
    isOpen = true
} : PostsTableProps) {
    const [isEditPostModalOpen,
        setIsEditPostModalOpen] = useState(false);
    const [isDeletePostModalOpen,
        setIsDeletePostModalOpen] = useState(false);
    const [postSelected,
        setPostSelected] = useState < Post | undefined > ();
    const [posts,
        setPosts] = useState < Post[] > ([]);
    const [currentPage,
        setCurrentPage] = useState(1);
    const POSTS_PER_PAGE = 10;

    const {getAllPosts} = usePosts()

    useEffect(() => {
        async function fetchAllPosts() {
            const allPosts = await getAllPosts();
            setPosts(allPosts);
        }
        fetchAllPosts();
    }, [posts]);

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }

    function handleOpenEditPostModal(post : Post) {
        setPostSelected(post);
        setIsEditPostModalOpen(true);
        scrollToTop();
    }

    function handleCloseEditPostModal() {
        setIsEditPostModalOpen(false);
    }

    function handleOpenDeletePostModal(post : Post) {
        setPostSelected(post);
        setIsDeletePostModalOpen(true);
        scrollToTop();
    }

    function handleCloseDeletePostModal() {
        setIsDeletePostModalOpen(false);
    }

    const getCurrentPosts = () => {
        const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
        const endIndex = startIndex + POSTS_PER_PAGE;
        return posts.slice(startIndex, endIndex);
    };

    const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

    return (
    <> 
    {
        isOpen && getCurrentPosts().map(post => (
            <Container key={post.id}>
                <Title>
                    <p>{post.title}</p>
                    {post.username === "usuário_teste" && (
                        <Icons>
                            <Trash
                                style={{
                                marginRight: "7px"
                            }}
                                onClick={() => handleOpenDeletePostModal(post)}/>
                            <Pencil onClick={() => handleOpenEditPostModal(post)} />
                        </Icons>
                    )}
                </Title>
                <Content>
                    <Username>
                        <h4>@{post.username}</h4>
                        <DateAgo>
                            {formatDistanceToNow(new Date(post.created_datetime), {addSuffix: true})}
                        </DateAgo>
                    </Username>
                    <p>{post.content}</p>
                </Content>
            </Container>
        ))
    } < Pagination currentPage = {
        currentPage
    }
    totalPages = {
        totalPages
    }
    onChange = {
        setCurrentPage
    } /> {
        isEditPostModalOpen && postSelected && (<EditPostModal
            Post={postSelected}
            isOpen={isEditPostModalOpen}
            onRequestClose={handleCloseEditPostModal}/>)
    }
    {
        isDeletePostModalOpen && postSelected && (<DeletePostModal
            Post={postSelected}
            isOpen={isDeletePostModalOpen}
            onRequestClose={handleCloseDeletePostModal}/>)
    } 
    </>
  )
}

export default PostsTable;