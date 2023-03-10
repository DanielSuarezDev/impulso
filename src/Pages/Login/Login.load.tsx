import React from 'react'
import { useAuth } from '../../Context/Auth/AuthContext';
import { Login } from './Login'

export const LoginLoad = () => {
  const {googleSignIn} = useAuth();
  return (
    <Login googleSignIn={googleSignIn} />
  )
}
