import styled from "styled-components";

export const DrawerContainer = styled.div<{ open?: boolean }>`
  position: fixed;
  width: 60%;
  height: auto;
  background-color: #fff;
  z-index: 10000;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-in-out;
  border-radius: 27px;
  margin-right: 10px;
  padding: 10px;
`;

export const Overlay = styled.div<{ open?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: ${({ open }) => (open ? "998" : "-1")};
  transition: z-index 0.3s ease-in-out;
`;
export const Container = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
`;
