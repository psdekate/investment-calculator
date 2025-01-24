import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Results } from "./components/Results";
import { UserInput } from "./components/UserInputs";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(investmentType, newValue) {
    setUserInput((item) => {
      return {
        ...item,
        [investmentType]: newValue,
      };
    });
  }

  return (
    <div className="main-content">
      <Header />
      <div className="body-content">
        <div className="col">
          <UserInput onChange={handleChange} userInput={userInput} />
        </div>
        <div className="col">
          <Results input={userInput} />
        </div>
      </div>
    </div>
  );
}

export default App;
