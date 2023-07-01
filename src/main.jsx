import React from "react";
import ReactDOM from "react-dom/client";
import {ThemeProvider} from "styled-components";
import {Container} from "./pages/Home/styles";
import {Routes} from "./routes";
import GlobalStyles from "./styles/Global";
import Theme from "./styles/Theme";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ThemeProvider theme={Theme}>
            <GlobalStyles/>
            <Routes/>
        </ThemeProvider>
    </React.StrictMode>
);
