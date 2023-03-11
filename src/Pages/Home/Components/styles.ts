import styled from "styled-components";

export const Container = styled.div<{background?: string}>`
    background: ${props => props.background ? props.background : '#333253'};
    padding: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 18px;
    height: 400px;
    width: 320px;
    overflow: hidden;
    margin: 30px 0;
`;

export const Title = styled.p`
    font-weight: bold;
    font-size: 20px;
    color: #fff;
    margin: 0;
`;

export const Text = styled.p`
    font-size: 16px;
    color: #fff;
    margin: 0;
`;
    