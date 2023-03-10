import React from 'react'
import { useAuth } from '../../Context/Auth/AuthContext';
import { Home } from './Home'

export const HomeLoad = () => {
  const {userConfig} = useAuth();
  console.log(userConfig)
  return (
    <Home />
  )
}
