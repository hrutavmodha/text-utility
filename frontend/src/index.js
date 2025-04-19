import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HashRouter } from "react-router-dom";
import { ModeProvider } from "./ModeContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ModeProvider>
        <HashRouter>
            <App/>
        </HashRouter>
    </ModeProvider>
);