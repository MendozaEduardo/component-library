import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { WelcomeModal } from "./components";
import { GlobalStyle, purpleTheme, defaultTheme } from "./utilities";

const App = () => {
  const [usePurpleTheme, setUsePurpleTheme] = useState(false);
  return (
    <ThemeProvider theme={usePurpleTheme ? purpleTheme : defaultTheme}>
      <button
        style={{ margin: "0 16px 24px", padding: "8px", background: "none" }}
        onClick={() => setUsePurpleTheme(true)}
      >
        Purple Theme
      </button>
      <button
        style={{ margin: "0 16px 24px", padding: "8px", background: "none" }}
        onClick={() => setUsePurpleTheme(false)}
      >
        Default Theme
      </button>

      <div
        style={{
          background: usePurpleTheme
            ? defaultTheme.primaryColor
            : purpleTheme.primaryColor,
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <WelcomeModal />
        <GlobalStyle />
      </div>
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
