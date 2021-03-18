import React from "react";
import styled from "styled-components";
import { typeScale , primaryFont , secondaryFont } from "../utils";

const Input = styled.input`
    width: 315px;
    height: 50px;
    border-radius: 2px;
    border: none;
    background-color: ${props => props.theme.formElementBackground};
    padding-left: 5px;
    font-family: ${secondaryFont};
    font-size: ${typeScale.paragraph}
`;

const Label = styled.label`
    font-family: ${primaryFont};
    font-size: ${typeScale.header5};
`;

export const EmailInput = ({ label, placeholder }) => (
    <div style={{ display: "flex", flexDirection: "column", marginTop: "16px" }}>
        <Label htmlFor="email">{label}</Label>
        <Input id="email" type="email" placeholder={placeholder} />
    </div>
);

export const PasswordInput = ({ label, placeholder }) => (
    <div style={{ display: "flex", flexDirection: "column", marginTop: "16px" }}>
        <Label htmlFor="password">{label}</Label>
        <Input id="password" type="password" placeholder={placeholder} />
    </div>
);