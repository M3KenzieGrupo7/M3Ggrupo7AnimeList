import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { UserProvider } from "./providers/UserContext";
import { mainTheme } from "./styles/theme";
import { BrowserRouter } from "react-router-dom";
import { CustomListProvider } from "./providers/ListCustom";
import { AnimesListProvider } from "./providers/AnimesListContext";
import { AnimeFavoriteProvider } from "./providers/AnimesFavoritesContext";
import { LoadingProvider } from "./providers/LoadingContext";
import { SearchProvider } from "./providers/SearchContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <LoadingProvider>
        <UserProvider>
          <AnimesListProvider>
            <CustomListProvider>
              <AnimeFavoriteProvider>
                <SearchProvider>
                  <ThemeProvider theme={mainTheme}>
                    <App />
                  </ThemeProvider>
                </SearchProvider>
              </AnimeFavoriteProvider>
            </CustomListProvider>
          </AnimesListProvider>
        </UserProvider>
      </LoadingProvider>
    </BrowserRouter>
  </React.StrictMode>
);
