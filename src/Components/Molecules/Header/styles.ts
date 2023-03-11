import styled from 'styled-components'

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    height: 4rem;
    z-index: 100;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: #fff;
    @media (min-width: 768px) {
        padding: 0 2rem;
    }
`