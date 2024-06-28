import React from "react";
import styled from "styled-components";
import { auth } from "../firebase/Firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Box } from "@mui/material";
import { toast } from "react-toastify";
const Login = () => {
  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      localStorage.setItem("user", JSON.stringify(result.user));
      toast.success("Signup Successful");
    } catch (error) {
      toast.error("Error signing in with Google");
    }
  };
  return (
    <LoginContainer style={{ paddingLeft: "20px", paddingRight: "20px" }}>
      <Box
        sx={{
          display: "flex",
          border: "1px solid wheat",
          backgroundColor: "#232F3A",
          flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
        }}
      >
        <Box
          sx={{ textAlign: "center", alignItems: "center", display: "flex" }}
        >
          <img
            src="https://ncetir.com/Images/login@4x.png"
            style={{ maxWidth: "300px", width: "100%", height: "auto" }}
            alt="img"
          />
        </Box>
        <LoginBox>
          <Title>Hello :wave:</Title>
          <Title>Welcome to My Portfolio</Title>
          <Subtitle>Let's Connect and Collaborate :handshake:</Subtitle>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <GoogleButton onClick={signInWithGoogle}>
              <GoogleIcon
                src="https://img.icons8.com/color/48/000000/google-logo.png"
                alt="Google icon"
              />
              Sign in with Google
            </GoogleButton>
          </Box>
        </LoginBox>
      </Box>
    </LoginContainer>
  );
};
export default Login;
// Styled Components
const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: black;
`;
const LoginBox = styled.div`
  padding: 40px 40px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`;
const Title = styled.h2`
  margin-bottom: 20px;
  color: wheat;
`;
const Subtitle = styled.p`
  margin-bottom: 30px;
  color: white;
`;
const GoogleButton = styled.button`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  background-color: white;
  border: none;
  border-radius: 5px;
  color: black;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
`;
const GoogleIcon = styled.img`
  margin-right: 10px;
  width: 24px;
  height: 24px;
`;