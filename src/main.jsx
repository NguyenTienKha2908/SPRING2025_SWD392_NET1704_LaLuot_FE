import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import GlobalStyle from "./components/global/GlobalStyle.jsx";
import i18n from "./config/i18n.js";
import { I18nextProvider } from "react-i18next";
createRoot(document.getElementById("root")).render(
    <StrictMode>
        <I18nextProvider i18n={i18n}>
            <GlobalStyle>
                <App />
            </GlobalStyle>
        </I18nextProvider>
    </StrictMode>
);
