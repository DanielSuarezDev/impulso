import React, { useEffect } from 'react'
import {useNavigate } from 'react-router-dom';
import { useAuth } from '../../Context/Auth/AuthContext';
import { Login } from './Login'

export const LoginLoad = () => {
  const {googleSignIn, userConfig} = useAuth();

  const navigate = useNavigate()
  useEffect(() => {
    if(userConfig) {
      navigate('/')
    }
  }, [userConfig])
  
  return (
    <Login googleSignIn={googleSignIn} />
  )
}
