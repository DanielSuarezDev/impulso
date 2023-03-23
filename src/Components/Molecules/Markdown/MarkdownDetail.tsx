// src/components/BlogDetail.tsx

import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BlogContext, BlogPost } from '../../../Context/Blog/BlogContext';
import ReactMarkdown from 'react-markdown';
import { Title , DatePost, MarkdownWrapper} from './styles';
import { Back } from '../../../assets';

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
      <MarkdownWrapper>
      <Link to="/blog">
        <Back />
      </Link>
      <Title>{post.title}</Title>
      <DatePost>{post.date}</DatePost>

      <ReactMarkdown>{post.content}</ReactMarkdown>
      </MarkdownWrapper>
    </div>
  );
};

export default BlogDetail;
