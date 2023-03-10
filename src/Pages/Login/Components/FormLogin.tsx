import React, { useState } from "react";
import styled from "styled-components";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../../../Config/firebase";
import {FormContainer, Input, Container } from "./styles";
import { Button } from "../../../Components/Atoms/Button/Button";



const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <FormContainer onSubmit={handleSignIn}>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" text="Iniciar sesión" />
      </FormContainer>
    </Container>
  );
};

export default SignInForm;
