import Calculator from "./components/Calculator/Calculator";
import "normalize.css";
import {GlobalStyles} from "./css/GlobalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <main>
        <Calculator />
      </main>
    </div>
  );
}

export default App;
