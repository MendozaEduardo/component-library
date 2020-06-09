import { addParameters, addDecorator } from "@storybook/react";
import { withContexts } from "@storybook/addon-contexts/react";
import { withKnobs } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";
import { contexts } from "./contexts";

addParameters({
  backgrounds: [
    { name: "Default theme", value: "#ffffff", default: true },
    { name: "Purple theme", value: "#2721a5" }
  ]
});

addDecorator(withContexts(contexts));
addDecorator(withKnobs);
addDecorator(withA11y);
