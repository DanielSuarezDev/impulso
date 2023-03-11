import styled from "styled-components";

export const DrawerContainer = styled.div<{ open?: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 80%;
  height: 100%;
  background-color: #fff;
  z-index: 999;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-in-out;
  border-radius: 27px 0px 0px 27px;
  padding: 1rem;
`;

export const Overlay = styled.div<{ open?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: ${({ open }) => (open ? "998" : "-1")};
  transition: z-index 0.3s ease-in-out;
`;
