import styled from 'styled-components';

export const DividerContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  width: 100%;
  margin: 20px 0px;

  &::before,
  &::after {
    content: '';
    flex-grow: 1;
    background-color: gray;
    height: 1px;
    margin: 0px 10px;
  }

  span {
    font-weight: bold;
  }
`;