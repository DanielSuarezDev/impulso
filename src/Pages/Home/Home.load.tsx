import React from 'react'
import { useAuth } from '../../Context/Auth/AuthContext';
import { Home } from './Home'
import Family from "../../assets/images/family.png";
import Kids from "../../assets/images/kids.png";
import Jovenes from "../../assets/images/jovenes.png";
import Parejas from "../../assets/images/parejas.png";
import Adolescentes from "../../assets/images/adolescents.png";
import Men from "../../assets/images/men.png";
import Women from "../../assets/images/women.png";


export const HomeLoad = () => {
  const {userConfig} = useAuth();

  const ListMinisters = [
    {
      name: 'Niños',
      img: Kids
    },
    {
      name: 'Adolescentes',
      img: Adolescentes
    },
    {
      name: 'Jovenes',
      img: Jovenes
    },
    {
      name: 'Hombres',
      img: Men
    },
    {
      name: 'Mujeres',
      img: Women
    },
    {
      name: 'Parejas',
      img: Parejas
    },
    {
      name: 'Familias',
      img: Family
    },
  ]
  console.log(userConfig)
  return (
    <Home ListMinisters={ListMinisters} />
  )
}
