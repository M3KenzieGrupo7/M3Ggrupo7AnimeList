import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { UserProvider } from "./providers/UserContext";
import { mainTheme } from "./styles/theme";
import { BrowserRouter } from "react-router-dom";
import { AnimesListProvider } from "./providers/AnimesListContext";
import { AnimeFavoriteProvider } from "./providers/AnimesFavoritesContext";
import { CustomListProvider } from "./providers/ListCustom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <AnimesListProvider>
          <CustomListProvider>
            <AnimeFavoriteProvider>
              <ThemeProvider theme={mainTheme}>
                <App />
              </ThemeProvider>
            </AnimeFavoriteProvider>
          </CustomListProvider>
        </AnimesListProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
