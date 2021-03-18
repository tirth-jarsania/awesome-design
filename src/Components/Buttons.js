import styled from 'styled-components';
import { typeScale } from "../utils";
import { applyStyleModifiers } from 'styled-components-modifiers';
/*
  -here we use inheritance property 
  -also by importing props => props.theme & typeScale we generalized design in whole project 
  now we don't require to write and remember every color
  -currently can't see the activity  active psudo class on button
  -we also use styled- modifiers
*/

const BUTTON_MODIFIERS = {
  small: ({theme}) => `
    font-size: ${typeScale.helperText};
    padding: 8px;
    font-family: ${theme.secondaryFont} !important;
  `,
  large: ({theme}) => `
    font-size: ${typeScale.header4};
    padding: 16px 34px;
  `,
  warning: ({theme}) => `
    background: none;
    color: ${theme.status.warningColor};
    &:hover, &:focus {
      background-color: ${theme.status.warningColorHover};
      outline: 3px solid ${theme.status.warningColorHover};
      outline-offset: 2px;
    }

    &:active {
      background-color: ${theme.status.warningColorActive};
    }
  `,
  primaryButtonWarning: ({theme}) => `
    background-color: ${theme.status.warningColor};
    color: ${theme.textColorInverted};
  `,
  secondaryButtonWarning: ({theme}) => `
    border: 2px solid ${theme.status.warningColor};
  `,
  error: ({theme}) => `
    background: none;
    color: ${theme.status.errorColor};
    &:hover, &:focus {
      background-color: ${theme.status.errorColorHover};
      outline: 3px solid ${theme.status.errorColorHover};
      outline-offset: 2px;
    }
    &:active {
      background-color: ${theme.status.errorColorActive};
    }
  `,
  primaryButtonError: ({theme}) => `
    background-color: ${theme.status.errorColor};
    color: ${theme.textColorInverted};
  `,
  secondaryButtonError: ({theme}) => `
    border: 2px solid ${theme.status.errorColor};
  `,
  success: ({theme}) => `
    background: none;
    color: ${theme.status.successColor};
    &:hover, &:focus {
      background-color: ${theme.status.successColorHover};
      outline: 3px solid ${theme.status.successColorHover};
      outline-offset: 2px;
      border: 2px solid transparent;
    }
    &:active {
      background-color: ${theme.status.successColorActive};
    }
  `,
  primaryButtonSuccess: ({theme}) => `
    background-color: ${theme.status.successColor};
    color: ${theme.textColorInverted};
  `,
  secondaryButtonSuccess: ({theme}) => `
    border: 2px solid ${theme.status.successColor};
  `
};

const BaseButton = styled.button`
    margin: 10px;
    padding: 12px 24px;
    font-size: ${typeScale.header5};
    font-family: ${props => props.theme.primaryFont};
    min-width: 120px;
    border-radius: 10px;
    cursor: pointer;
    border: none;
    background: none;
    outline: none;
    transition: background-color 0.2s linear, color 0.2s linear;
    
    &:hover {
      background-color:${props => props.theme.primaryHoverColor};
      color: ${props => props.theme.textColorOnPrimary}
    }

    &:focus {
      outline: 2px solid ${props => props.theme.primaryHoverColor};
      outline-offset: 2px;
    }

    &:active {
      background-color:${props => props.theme.primaryActiveColor};
      color: ${props => props.theme.textColorOnPrimary};
    }

    &:disabled {
      background: none;
      border: none;
      cursor: not-allowed;
      color: ${props => props.theme.disabled};
    }
`;

export const PrimaryButton = styled(BaseButton)`
    background-color: ${props => props.theme.primaryColor};
    color: ${props => props.theme.textColorOnPrimary};

    &:disabled {
      background-color: ${props => props.theme.disabled};
      color: ${props => props.theme.textOnDisabled};
    }
    ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const SecondaryButton = styled(BaseButton)`
  border: 2px solid ${props => props.theme.primaryColor};
  color: ${props => props.theme.primaryColor};

  &:disabled {
    border: 2px solid ${props => props.theme.disabled} ;
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const TertiaryButton = styled(BaseButton)`
  color: ${props => props.theme.primaryColor};
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;



