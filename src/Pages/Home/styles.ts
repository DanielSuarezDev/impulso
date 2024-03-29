import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  margin-bottom: 100px;
  margin: 0 auto;
  width: 90%;
  max-width: none;
  min-width: 300px;
`;

export const Content = styled.div`
  height: 100%;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Welcome = styled.h2`
  font-size: 2rem;
  color: ${(props) => props.theme.violet_300};
  width: 100%;
`;

export const Title = styled.h2`
  margin-top: 40px;
  font-size: 3.2rem;
  color: #22292f;
  text-align: center;
  font-weight: 600;
`;

export const Text = styled.p`
  margin-top: 20px;
  font-size: 1.6rem;
  color: #22292f;
  text-align: center;
  font-weight: 400;
`;

export const Ministerio = styled.span`
  background: linear-gradient(to bottom, #5305d2, #510098, #510098);

  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
`;

export const Dios = styled.span`
  background: linear-gradient(to bottom, #5305d2, #510098, #510098);

  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
`;

export const ContainerCards = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 40px;
`;
