import { primary, neutral,success,warning,error } from "./colors";
import { primaryFont,secondaryFont } from "./typography";

export const defaultTheme = {
  primaryColor: primary[200],
  primaryHoverColor: primary[100],
  primaryActiveColor: primary[300],
  textColorOnPrimary: neutral[100],
  textColor: neutral[600],
  textColorInverted: neutral[100],
  disabled: neutral[400],
  textOnDisabled: neutral[300],
  primaryFont,
  secondaryFont,
  formElementBackground: neutral[100],
  textOnFormElementBackground: neutral[600],
  status: {
    warningColor: warning[100],
    warningColorHover: warning[200],
    warningColorActive: warning[300],
    errorColor: error[100],
    errorColorHover: error[200],
    errorColorActive: error[300],
    successColor: success[100],
    successColorHover: success[200],
    successColorActive: success[300]
  }
};

/*
  nowadays we see more than one theme available
  so we just try add one another theme darkTheme
*/

export const darkTheme = {
  primaryColor: neutral[200],
  primaryHoverColor: neutral[100],
  primaryActiveColor: neutral[300],
  textColorOnPrimary: primary[300],
  textColor: primary[300],
  textColorInverted: neutral[100],
  disabled: neutral[400],
  textOnDisabled: neutral[300],
  primaryFont,
  secondaryFont,
  formElementBackground: primary[100],
  textOnFormElementBackground: neutral[100],
  status: {
    warningColor: warning[100],
    warningColorHover: warning[200],
    warningColorActive: warning[300],
    errorColor: error[100],
    errorColorHover: error[200],
    errorColorActive: error[300],
    successColor: success[100],
    successColorHover: success[200],
    successColorActive: success[300]
  }
};