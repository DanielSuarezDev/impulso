// src/components/BlogDetail.tsx

import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BlogContext, BlogPost } from '../../../Context/Blog/BlogContext';
import ReactMarkdown from 'react-markdown';

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { posts } = useContext(BlogContext);

  const post: BlogPost | undefined = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <div>
        <h2>Post no encontrado</h2>
        <Link to="/blog">Volver a la lista</Link>
      </div>
    );
  }

  return (
    <div>
      <Link to="/blog">Volver a la lista</Link>
      <h2>{post.title}</h2>
      <p>{post.date}</p>
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </div>
  );
};

export default BlogDetail;
