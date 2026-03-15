import "./App.css";
import { Counter } from "./components/counter";
import { Login } from "./components/login";

function App() {
  return (
    <div className="app">
      <Counter />
      <Login />
    </div>
  );
}

export default App;
