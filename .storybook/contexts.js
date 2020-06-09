import { ThemeProvider } from "styled-components";
import { defaultTheme, purpleTheme } from "../src/utilities";

export const contexts = [
  {
    icon: "box",
    title: "Themes",
    components: [ThemeProvider],
    params: [
      {
        name: "Default theme",
        props: { theme: defaultTheme, default: true }
      },
      { name: "Purple theme", props: { theme: purpleTheme } }
    ],
    options: {
      deep: true,
      disable: false,
      cancelable: false
    }
  }
];
