// src/components/BlogList.tsx

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Right } from "../../../assets";
import { BlogContext, BlogPost } from "../../../Context/Blog/BlogContext";
import {
  Badge,
  Container,
  DatePost,
  EllipsisTitle,
  LinkView,
  MarkdownWrapper,
  Title,
} from "./styles";

interface BlogListProps {
  onPostClick?: (post: BlogPost) => void;
  showAll?: boolean;
}

const BlogList: React.FC<BlogListProps> = ({ showAll = true }) => {
  const { posts } = useContext(BlogContext);
  const displayPosts = showAll ? posts : posts.slice(-3);

  const formarteDate = (dates: string) => {
    const date = new Date(dates);
    const options: any = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = date.toLocaleDateString("es-ES", options);
    return formattedDate;
  };

  return (
    <MarkdownWrapper>
      {displayPosts.map((post) => (
        <Container key={post.id}>
          <Link
            to={`/blog/${post.id}`}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <EllipsisTitle>
                  {post.title.length > 20
                    ? post.title.substring(0, 20) + "..."
                    : post.title}
              </EllipsisTitle>

              <div style={{ display: "flex", alignItems: "center" }}>
                <DatePost>{formarteDate(post.date)}</DatePost>
                <Badge tagname={post.tag}>{post.tag}</Badge>
              </div>
            </div>
            <Right />
          </Link>
        </Container>
      ))}
      {!showAll && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 10,
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <LinkView to="/blog">Ver todos los posts</LinkView>
          <Right />
        </div>
      )}
    </MarkdownWrapper>
  );
};

export default BlogList;
