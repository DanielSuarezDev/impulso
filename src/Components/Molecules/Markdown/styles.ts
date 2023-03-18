import { Link } from "react-router-dom";
import styled from "styled-components";

const backgroundColors: any = {
  maestros: "#B5F6FF",
  niños: "#FFB5F3",
  iglesia: "#B5BCFF",
  varones: "#FFF8B5",
  mujeres: "#FFB5F3",
};

const colors: any = {
  maestros: "#005763",
  niños: "#8D0077",
  iglesia: "#091584",
  varones: "#544C00",
  mujeres: "#8D0077",
};

export const MarkdownWrapper = styled.div`
  font-size: 1.2rem;
  line-height: 1.5;
  color: #333;
  margin: 0 auto;
  max-width: 800px;
  padding: 0 1rem;
  word-break: break-word;
  word-wrap: break-word;
  a {
    color: #000;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0;
  padding: 0;
  margin-top: 1rem;
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 800px;
  padding: 0 1rem;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: relative;
  margin-bottom: 10px;
`;

export const Badge = styled.span<{ tagname?: any }>`
  background: ${(props) => backgroundColors[props.tagname] || "#333253"};
  color: ${(props) => colors[props.tagname] || "#fff"};
  padding: 5px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  display: inline-block;
  margin-left: 0.5rem;
  margin-bottom: 0.7rem;
`;

export const DatePost = styled.span`
  font-size: 1rem;
  color: #999;
  margin-bottom: 1rem;
  display: block;
`;

export const LinkView = styled(Link)`
  color: #000;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const EllipsisTitle = styled(Title)`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
