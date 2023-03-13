import { GlobalStyles } from "./styles/globalStyle";
import RouterPages from "./Routes";
function App() {
  return (
    <>
      <GlobalStyles />
      <div className="App">
        <RouterPages />
      </div>
    </>
  );
}

export default App;
