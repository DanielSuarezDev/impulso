import styled, { keyframes } from "styled-components";

export const Container = styled.div`
    background-color: #f5f5f5;
    padding: 20px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    background: #fff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 18px;
    height: 110px;
    width: 120px;
    overflow: hidden;
`;

export const Image = styled.img`
    width: 120px;
    height: 188px;
    object-fit: contain;
`;

export const Title = styled.p`
    font-weight: bold;
    font-size: 13px;
    /* line-height: 28px; */
    color: #22292f;
    margin: 0;
`;