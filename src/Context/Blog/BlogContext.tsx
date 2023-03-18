// src/context/BlogContext.tsx

import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { db } from '../../Config/firebase';
import { collection, getDocs, addDoc } from 'firebase/firestore';

import firebase from 'firebase/compat/app';

interface BlogContextType {
    posts: BlogPost[];
    addPost: (title: string, tag: string, content: string) => Promise<void>;
  }

const BlogContext = createContext<BlogContextType>({
  posts: [],
  addPost: async () => {},
});

interface BlogProviderProps {
  children: ReactNode;
}

export interface BlogPost {
    id: string;
    title: string;
    tag: string;
    content: string;
    date: string;
  }

const BlogProvider: React.FC<BlogProviderProps> = ({ children }) => {
    const [posts, setPosts] = useState<BlogPost[]>([]);

  const fetchPosts = async () => {
    const postsCollection = collection(db, 'posts');
    const postsSnapshot = await getDocs(postsCollection);
    const postsData: BlogPost[] = postsSnapshot.docs.map((doc) => ({
      id: doc.id,
      title: doc.data().title,
      tag: doc.data().tag,
      content: doc.data().content,
      date: doc.data().date,
    }));
    setPosts(postsData);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const addPost = async (title: string, tag: string, content: string) => {
    const postsCollection = collection(db, 'posts');
    const date = new Date().toISOString();
    await addDoc(postsCollection, { title,tag, content, date });
    fetchPosts();
  };

  return (
    <BlogContext.Provider value={{ posts, addPost }}>
      {children}
    </BlogContext.Provider>
  );
};

export { BlogContext, BlogProvider };
