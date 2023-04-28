import React, { ReactNode, createContext, useContext } from 'react';
import { getAllPosts, createPost, updatePost, deletePost, Post } from '../../services/api';

interface ApiContextType {
  getAllPosts: () => Promise<Post[]>;
  createPost: (username: string, title: string, content: string) => Promise<Post>;
  updatePost: (id: number, title: string, content: string) => Promise<Post>;
  deletePost: (id: number) => Promise<void>;
}

export const ApiContext = createContext<ApiContextType>({
  getAllPosts: () => Promise.resolve([]),
  createPost: () => Promise.resolve({} as Post),
  updatePost: () => Promise.resolve({} as Post),
  deletePost: () => Promise.resolve(),
});

export function useApi() {
  return useContext(ApiContext);
}

export const ApiProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ApiContext.Provider value={{ getAllPosts, createPost, updatePost, deletePost }}>
      {children}
    </ApiContext.Provider>
  );
};