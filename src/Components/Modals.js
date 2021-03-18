/*
  Refactor the code
*/
import React from 'react';
import styled from 'styled-components';
import { typeScale } from "../utils";
import { PrimaryButton,SecondaryButton } from "./Buttons";
import { Illustrations,CloseIcon } from "../assets";
import { useSpring , animated , config } from "react-spring";
import { EmailInput , PasswordInput } from "./TextFields";

const getAnimation = showModal => {
  return {
      opacity: showModal ? 1 : 0 , 
      transform: showModal ? `translateY(0)` : `translateY(-100%)`,
      config: config.slow
  };
};
const ModalWrapper = styled.div`
  width: 800px;
  height: 600px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background-color: ${props => props.theme.formElementBackground};
  color: ${props => props.theme.textOnFormElementBackground};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 10px;
  background: ${props => props.theme.formElementBackground};
`;

const ColumnModalWrapper = styled(ModalWrapper)`
  flex-direction: row;
  justify-content: space-around
`;
const SignUpHeader = styled.h3`
  font-size: ${typeScale.header3};
`;

const SignUpText = styled.p`
  font-size: ${typeScale.paragraph};
  max-width: 70%;
  text-align: center;
`;

const CloseModalButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  position: absolute;
  top: 40px;
  right: 40px;
  width: 24px;
  height: 24px;
  padding: 0;
  outline: none;
`;
export const SignUpModal = ({showModal , setShowModal}) => (
      <animated.div style={useSpring(getAnimation(showModal))}>
        <ModalWrapper>
       
        <img style = {{height: '400px',
            width: '400px'}}     
        src={Illustrations.SignUp} alt="Sign up for an account!" />
        
        <SignUpText>
            Hurry up guys for getting cool things
        </SignUpText>
        <PrimaryButton onClick={() => console.log("You signed up!")}>
          Sign Up
        </PrimaryButton>
        <CloseModalButton aria-label="Close modal" onClick={() => setShowModal(false)}>
            <CloseIcon />
        </CloseModalButton>
      </ModalWrapper>
      </animated.div>
);

export const SignInModal = ({showModal , setShowModal}) => (
  <animated.div style={useSpring(getAnimation(showModal))}>
  <ColumnModalWrapper>
      <div>
          <SignUpHeader>Sign In</SignUpHeader>
          <EmailInput label="Email" placeholder="tirthjarsania@gmail.com" />
          <PasswordInput label="Password" placeholder="Try it by own" />
          <SecondaryButton style={{ margin: "16px 16px 0 0" }}>
          Sign Up
        </SecondaryButton>
        <PrimaryButton>Sign In</PrimaryButton>
        </div>
      
    <img style = {{height: '400px',
        width: '400px'}}     
    src={Illustrations.SignIn} alt="Sign in for an account!" />
  
    <CloseModalButton aria-label="Close modal" onClick={() => setShowModal(false)}>
        <CloseIcon />
    </CloseModalButton>
  </ColumnModalWrapper>
  </animated.div>
);
  