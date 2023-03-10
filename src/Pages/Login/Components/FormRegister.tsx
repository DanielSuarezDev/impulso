import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../../../Config/firebase";

import { User } from "@firebase/auth";
import { Container, Error, FormContainer, Input } from "./styles";
import { Button } from "../../../Components/Atoms/Button/Button";

import EyeOpen from "../../../assets/icons/eye-open.svg";

interface UserWithProfile extends User {
  updateProfile: (profile: {
    displayName?: string;
    photoURL?: string;
  }) => Promise<void>;
}

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showError, setShowError] = useState("");

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setShowError("La contraseña no coincide");
      return;
    }
    if ((password.length < 6) && (confirmPassword.length < 6)) {
      setShowError("La contraseña debe contener minimo 6 caracteres");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      //@ts-ignore
      await userCredential.user?.updateProfile({
        displayName: username,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <FormContainer onSubmit={handleSignUp}>
        <Input
          type="text"
          placeholder="Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
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
        <Input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Error>{showError}</Error>
        <Button type="submit" text="Registrarme" />
      </FormContainer>
    </Container>
  );
};

export default RegisterForm;
