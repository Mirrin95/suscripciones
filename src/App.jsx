import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import FormAddMoney from "./components/FormAddMoney";
import MainController from "./components/MainController";

function App() {
  const [count, setCount] = useState(0);
  const [isValid, setIsValid] = useState(false);
  const component = isValid ? (
    <MainController count={count} />
  ) : (
    <FormAddMoney setCount={setCount} setIsValid={setIsValid} />
  );

  return (
    <div className="App">
      <Header />
      {component}
    </div>
  );
}

export default App;
