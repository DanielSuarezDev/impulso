import {FC} from 'react'
import { Container } from './styles'

export const Button:FC<any> = ({text, width, height, color, background, onClick}) => {
  return (
    <Container onClick={onClick} width={width} height={height} color={color} background={background}>{text}</Container>
  )
}
