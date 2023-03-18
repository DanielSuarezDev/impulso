import reactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    padding: 1rem;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.h2`
    font-size: 2.5rem;
    font-weight: 600;
    margin-bottom: 10px;
`;

export const Text = styled(reactMarkdown)`
    font-size: 1.5rem;
    font-weight: 400;
    margin-bottom: 10px;
`;

export const Button = styled.a`
    background-color: #091584;
    color: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 10px;
    cursor: pointer;

`;

export const GoBack = styled(Link)`
    color: #000;
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 30px;
    cursor: pointer;
    position: absolute;
    top: 10px;
    left: 0;
`;