import React from "react";
import { useAuth } from "../../Context/Auth/AuthContext";

export const Home = () => {
  const {logOut} = useAuth()
  return (
    <div>
      <div>Home</div>
      <p onClick={logOut}>Logout</p>
    </div>
  );
};
