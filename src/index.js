import React ,{useState} from 'react';
import ReactDOM from 'react-dom';
import { PrimaryButton, SecondaryButton,TertiaryButton } from './Components/Buttons';
import { GlobalStyle,defaultTheme,darkTheme } from "./utils";
import {ThemeProvider} from "styled-components";
import { SignUpModal } from "./Components";

const App = () => {
    const [ useDarkTheme , setUseDarkTheme ] = useState(false);
    const [ showModal , setShowModal ] = useState(false);
    return (
        <ThemeProvider theme={useDarkTheme? darkTheme : defaultTheme}>
            < PrimaryButton onClick={() => setUseDarkTheme(true)}>DarkTheme</PrimaryButton>
            < SecondaryButton onClick={() => setUseDarkTheme(false)}>DefaultTheme</SecondaryButton>
            < TertiaryButton onClick={() => setShowModal(true)}>Show Modal</TertiaryButton>
            <div style={{
                background: useDarkTheme ? defaultTheme.primaryColor : darkTheme.primaryColor,
                width: "100vw",
                height: "90vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around"
                }}
            >
            <PrimaryButton modifiers={["small", "success", "primaryButtonSuccess"]}>
            Hello world
          </PrimaryButton>
          <SecondaryButton modifiers={["large", "warning", "secondaryButtonWarning"]}>
            Goodbye world
          </SecondaryButton>
          <TertiaryButton modifiers={["error", "tertiaryButtonError"]}>
            Hey world
          </TertiaryButton>
                <GlobalStyle />
                <SignUpModal showModal={showModal} setShowModal={setShowModal} />
            </div>
        </ThemeProvider>
        
    );
}

ReactDOM.render(<App /> , document.getElementById("root"));