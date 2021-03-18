import { addParameters } from "@storybook/react";
import { addDecorator } from "@storybook/react";
import { withContexts } from "@storybook/addon-contexts/react";
import { withKnobs } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";
import { contexts } from "./contexts";

addParameters({
  backgrounds: {
    default:"Default theme",
    values:[
      { 
        name: "Default theme",
        value: "#ffffff",
      },
      { 
        name: "Dark theme",
        value: "#049A8F" 
      }
  ],
},
});

addDecorator(withContexts(contexts));
addDecorator(withKnobs);
addDecorator(withA11y);