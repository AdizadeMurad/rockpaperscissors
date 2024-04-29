import React, { useState } from "react";
import tasImg from "./img/tas.jpg";
import kagitImg from "./img/kagit-1.jpg";
import makasImg from "./img/makas.jpg";
import "./App.css";

function App() {
  const [ourChoice, setOurChoice] = useState("");
  const [computer, setComputer] = useState("");
  const [result, setResult] = useState("");
  const [computerScore, setComputerScore] = useState(0);
  const [ourScore, setOurScore] = useState(0);

  function giveComputerChosen() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    let choice = "";
    if (randomNumber === 1) {
      choice = "taş";
    } else if (randomNumber === 2) {
      choice = "kağıt";
    } else if (randomNumber === 3) {
      choice = "makas";
    }
    setComputer(choice);
  }
  function handleClick(choiceClick) {
    setOurChoice(choiceClick);
    giveComputerChosen();
    compare();
  }

  function compare() {
    if (computer === ourChoice) {
      setResult("Bərabər!");
    } else if (
      (computer === "taş" && ourChoice === "makas") ||
      (computer === "kağıt" && ourChoice === "taş") ||
      (computer === "makas" && ourChoice === "kağıt")
    ) {
      setResult("Uduzdunuz!");
      setComputerScore(computerScore + 1);
    } else {
      setResult("Qalib gəldiniz!");
      setOurScore(ourScore + 1);
    }
  }



  return (
    <div className="container">
      <div className="general__container">
        <div className="chosens">
          <div className="computer__chosen">
            <p id="computer__chosen">{computer}</p>
          </div>

          <div className="match">
            <div className="netice__match">
              <p id="match">SCORE:</p>
            </div>

            <div className="general__score">
              <div className="computer__scor">
                <p id="computer__scor">{computerScore}</p>
              </div>
              <div className="scor__line">
                <div className="line"></div>
              </div>
              <div className="our__scor">
                <p id="our__scor">{ourScore}</p>
              </div>
            </div>
          </div>

          <div className="our__chosen">
            <p id="our__chosen">{ourChoice}</p>
          </div>
        </div>
        <div className="buttons">
          <button onClick={() => handleClick("taş")}>
            <img src={tasImg} alt="taş" />
          </button>
          <button onClick={() => handleClick("kağıt")}>
            <img src={kagitImg} alt="kağıt" />
          </button>
          <button onClick={() => handleClick("makas")}>
            <img src={makasImg} alt="makas" />
          </button>
        </div>
        <div className="result">
          <div className="for__result">
            <p className="result__text">
              Oyunun nəticəsi :
              <span className="result__div" id="result">{result}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;














