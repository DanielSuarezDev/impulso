import styled from "styled-components";

export const Image = styled.img<{
  width?: string;
  height?: string;
  radius?: string;
}>`
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "328px"};
  object-fit: cover;
  border-radius: ${({ radius }) => radius || "0px 0px 34px 34px"};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Title = styled.h2`
  margin-top: 20px;
  font-size: 24px;
  font-weight: bold;
  color: #5b5b5b;
  margin-bottom: 10px;
`;

export const Subtitle = styled.h3`
  font-size: 16px;
  font-weight: normal;
  color: #000;
  margin: 0;
`;

export const Link = styled.p`
    font-size: 11px;
    font-weight: normal;
    color: #001AFF;
    margin-top: 4px;
    cursor: pointer;
    text-decoration: underline;
`;