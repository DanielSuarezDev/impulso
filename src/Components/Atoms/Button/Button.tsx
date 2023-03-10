import {FC} from 'react'
import { Container } from './styles'

export const Button:FC<any> = ({text, width, height}) => {
  return (
    <Container width={width} height={height}>{text}</Container>
  )
}
