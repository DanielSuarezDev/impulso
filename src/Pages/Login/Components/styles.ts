import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

export const Input = styled.input`
  margin-bottom: 10px;
  padding: 0 10px;
  width: 328px;
  height: 49px;
  background: #ffffff;
  border: 1px solid #e8e8e8;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
`;

export const ButtonGoogle = styled.button`
    margin-top: 10px;   
    width: 328px;
    height: 49px;
    background: #ffffff;
    border: 1px solid #e8e8e8;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    cursor: pointer;
`;

export const Error = styled.p`
  color: red;
  font-size: 10px;
`;

export const ContainerDrawer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

export const LinkList = styled(Link)`
  text-decoration: none;
  color: #000;
  font-size: 12px;
  margin-top: 20px;
  display: flex;
  align-items: center;
`;

export const Span = styled.span`
  font-size: 15px;
  color: #6A6A6A;
  margin-left: 5px;
  font-weight: bold;
`;