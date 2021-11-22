import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import styled from "styled-components";
import GlobalFonts from "./fonts/fonts";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    darkest: "#0D0F12",
    darker: "#17191D",
    dark: "#2A2B31",
    purple: "#7B61FF",
    purple_dark: "#5f3fff",
  },
};

function App() {
  const [image, setImage] = useState("");
  const handleChange = () => {
    axios
      .get(
        "https://api.generated.photos/api/v1/faces?api_key=sTqd9zv24s8h0iOJZHORiA&order_by=random"
      )
      .then((res) => {
        setImage(res.data.faces[0].urls[4][512]);
        console.log(res.data.faces[0].urls[4][512]);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <App_Container className="App">
        <GlobalFonts />
        <Heading>AI Face Generator</Heading>
        <Face src={image} />

        <Button type="button" onClick={handleChange}>
          New Face
        </Button>
      </App_Container>
    </ThemeProvider>
  );
}

export default App;

const App_Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  place-content: center;
  gap: 5vh;
  font-family: "ProximaBold";
  background-color: ${({ theme }) => theme.colors.darkest};
`;

const Heading = styled.h1`
  color: white;
  font-weight: 800;
  font-size: 40px;
`;

const Face = styled.img`
  width: 40vh;
  height: 40vh;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.darker};
  padding: 2em;
  -webkit-box-shadow: 0px 5px 16px 1px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 5px 16px 1px rgba(0, 0, 0, 0.3);
`;

const Button = styled.button`
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.purple};
  color: white;
  font-family: "ProximaSemiBold";
  font-size: 18px;
  border-radius: 10px;
  padding: 10px 20px;
  border: none;
  transition: all;
  transition-duration: 300ms;

  &:hover {
    background-color: ${({ theme }) => theme.colors.purple_dark};
  }
`;
