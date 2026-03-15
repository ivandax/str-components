import "./App.css";
import { Counter } from "./components/counter";
import { Login } from "./components/login";
import { NumberTextInput } from "./components/number-text-input";

function App() {
  return (
    <div className="app">
      <Counter />
      <Login />
      <NumberTextInput />
    </div>
  );
}

export default App;
