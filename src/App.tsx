import { useState } from "react";
import Header from "./components/Header/Header";
import DashBoard from "./pages/DashBoard/DashBoard";
import { GlobalStyles } from "./styles/globalStyle";
import { mainTheme } from "./styles/theme";
import RouterPages from "./Routes";
function App() {
  
  return (
    <>
      <GlobalStyles />
      <div className="App">
        <RouterPages/>
      </div>
    </>
  );
}

export default App;
