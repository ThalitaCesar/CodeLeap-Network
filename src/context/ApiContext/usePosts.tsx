import { useContext } from "react";
import { Post } from "../../services/api";
import { ApiContext } from "../ApiContext";

interface UsePostsReturnType {
  getAllPosts: () => Promise<Post[]>;
  createPost: (username: string, title: string, content: string) => Promise<Post>;
  updatePost: (id: number, title: string, content: string) => Promise<Post>;
  deletePost: (id: number) => Promise<void>;
}

export function usePosts(): UsePostsReturnType {
  const api = useContext(ApiContext);

  return {
    getAllPosts: api.getAllPosts,
    createPost: api.createPost,
    updatePost: api.updatePost,
    deletePost: api.deletePost,
  };
}
