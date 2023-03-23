import { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../../../Context/Auth/AuthContext';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  /* padding: 16px; */
  width: 320px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
`;

const CardBadge = styled.span`
  background-color: #f1c40f;
  color: #fff;
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 4px;
  position: absolute;
  top: 8px;
  right: 8px;
`;

const CardTitle = styled.h3`
  margin: 16px 0;
  font-size: 18px;
  text-align: center;
`;

const CardButton = styled(Link)`
  background-color: #3498db;
  color: #fff;
  font-size: 16px;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 10px;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2980b9;
  }
`;


const Card: FC<any> = ({ imageUrl, badgeText, title, to }) => {

  const {userConfig} = useAuth();
  return (
    <CardContainer>
    <ImageContainer>
      <CardBadge>{badgeText}</CardBadge>
      <CardImage src={imageUrl} alt={title} />
    </ImageContainer>
    <CardTitle>{title}</CardTitle>
    {userConfig ? <CardButton to={to} >Ir al material</CardButton> : <CardButton to="/login" >Inicia sesión para ver el material</CardButton>}
  </CardContainer>
  );
};

export default Card;
