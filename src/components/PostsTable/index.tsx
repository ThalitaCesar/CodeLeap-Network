import { Pencil, Trash } from "phosphor-react";
import { usePosts } from "../../context/ApiContext/usePosts";
import { Container, Content, Icons, Title } from "./styles";
import { useState, useEffect } from "react";
import { EditPostModal } from "../EditPostModal";
import { DeletePostModal } from "../DeletePostModal";
import { Post } from '../../services/api';

interface PostsTableProps {
  isOpen?: boolean;
}

export function PostsTable({ isOpen = true }: PostsTableProps) {
  const [isEditPostModalOpen, setIsEditPostModalOpen] = useState(false);
  const [isDeletePostModalOpen, setIsDeletePostModalOpen] = useState(false);
  const [postSelected, setPostSelected] = useState<Post | undefined>();
  const [posts, setPosts] = useState<Post[]>([]);

  const {getAllPosts} = usePosts()

  useEffect(() => {
    async function fetchAllPosts() {
      const allPosts = await getAllPosts();
      setPosts(allPosts);
    }
    fetchAllPosts();
  }, [posts]);



  function handleOpenEditPostModal(post: Post) {
    setPostSelected(post);
    setIsEditPostModalOpen(true);
  }

  function handleCloseEditPostModal() {
    setIsEditPostModalOpen(false);
  }

  function handleOpenDeletePostModal(post: Post) {
    setPostSelected(post);
    setIsDeletePostModalOpen(true);
  }

  function handleCloseDeletePostModal() {
    setIsDeletePostModalOpen(false);
  }

  return (
    <>
      {isOpen && posts?.map(post => (
        <Container key={post.id}>
          <Title>
            <p>{post.title}</p>
            <Icons>
              <Trash
                style={{
                  marginRight: "7px"
                }}
                onClick={() => handleOpenDeletePostModal(post)} />
              <Pencil onClick={() => handleOpenEditPostModal(post)} />
            </Icons>
          </Title>
          <Content>{post.content}</Content>
        </Container>
      ))}

      {isEditPostModalOpen && postSelected && (
        <EditPostModal
          Post={postSelected}
          isOpen={isEditPostModalOpen}
          onRequestClose={handleCloseEditPostModal} />
      )}
      {isDeletePostModalOpen && postSelected && (
        <DeletePostModal
          Post={postSelected}
          isOpen={isDeletePostModalOpen}
          onRequestClose={handleCloseDeletePostModal} />
      )}
    </>
  )
}

export default PostsTable;
