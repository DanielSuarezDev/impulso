import styled from "styled-components";

export const Container = styled.button<{
  width?: string;
  height?: string;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${({ width }) => width || "328px"};
  height: ${({ height }) => height || "49px"};
  background-color: #5305d2;
  color: #fff;
  border-radius: 7px;
  font-size: 16px;
  padding: 0 10px;
  border: none;
`;
