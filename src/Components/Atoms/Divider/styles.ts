import styled from 'styled-components';

export const DividerContainer = styled.div<{lineUnique?: boolean}>`
  display: flex;
  align-items: center;
  text-align: center;
  width: 100%;
  margin: 20px 0px;

  &::before,
  &::after {
    content: '';
    flex-grow: 1;
    background-color: #D2D2D2;
    height: 1px;
    margin: ${props => props.lineUnique ? '0px' : '0px 10px'};
  }

  span {
    font-weight: bold;
  }
`;