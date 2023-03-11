import styled from "styled-components";

export const Container = styled.div`
    background-color: #f5f5f5;
    padding: 20px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    background: #fff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 18px;
    height: 110px;
    width: 320px;
    overflow: hidden;
    margin-bottom: 10px;
`;

export const Image = styled.img`
    width: 120px;
    height: 108px;
    border-radius: 15px;
    /* object-fit: contain; */
`;

export const Title = styled.p`
    font-weight: bold;
    font-size: 13px;
    /* line-height: 28px; */
    color: #22292f;
    margin: 0;
`;

export const Text = styled.p`
    font-size: 12px;
    /* line-height: 28px; */
    color: #22292f;
    margin: 0;
`;

export const Time = styled.p`
    font-size: 12px;
    /* line-height: 28px; */
    color: #A5A5A5;
    margin: 0;
`;

export const WrapperTexts = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 10px;
    height: 100%;
`;