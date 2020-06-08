import React from "react";
import styled from "styled-components";
import { typeScale } from "../utilities";
import { Illustrations, CloseIcon } from "../assets";
import { PrimaryButton } from "./Buttons";

const ModalWrapper = styled.div`
  width: 800px;
  height: 580px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background-color: ${(props) => props.theme.formElementBackground};
  color: ${(props) => props.theme.textOnFormElementBackground};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 2px;
`;

const WelcomeHeader = styled.h3`
  font-size: ${typeScale.header3};
`;

const WelcomeText = styled.p`
  font-size: ${typeScale.paragraph};
  max-width: 70%;
  text-align: center;
`;

const CloseModalButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  position: absolute;
  right: 10px;
  top: 10px;
  width: 24px;
  height: 24px;
  padding: 0;
`;

export const WelcomeModal = () => {
  return (
    <ModalWrapper>
      <img src={Illustrations.Welcome} alt="Site welcome" aria-hidden="true" />
      <WelcomeHeader>Hey there, welcome to my site!</WelcomeHeader>
      <WelcomeText>
        I made this site with the intent to introduce myself, as well as
        showcase my front-end development skills.
      </WelcomeText>
      <PrimaryButton>I'm in, show me what you've got!</PrimaryButton>
      <CloseModalButton aria-label="Close modal">
        <CloseIcon />
      </CloseModalButton>
    </ModalWrapper>
  );
};
