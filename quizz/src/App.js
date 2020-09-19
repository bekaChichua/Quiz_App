import React, { useState, useEffect } from "react";
import QuestionCard from "./components/QuestionCard";
import { API } from "./API";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [quiz, setQuiz] = useState([]);
  const [numberOfQuestion, setNumberOfQuestion] = useState(0);
  const [difficulty, setDifficulty] = useState("");
  const [isGameRunning, setIsGameRunning] = useState(false);
  const [multipleChoice, setMultipleChoice] = useState([]);
  // const [question, setQuestion] = useState("");
  const NUMBER = 10;
  // console.log(myData);
  // console.log(API(NUMBER, "easy"));

  const startGame = async () => {
    setIsGameRunning(true);
    setLoading(true);
    const newQuiz = await API(NUMBER, "easy");
    setQuiz(newQuiz);
    setLoading(false);
    console.log(quiz, "state");
    console.log(newQuiz, "const");
  };

  return (
    <div>
      <p>REACT QUIZ </p>
      <button onClick={() => startGame()}>Start Game</button>
      {loading ? <p>Game is loading.....</p> : null}
      {!loading && isGameRunning ? (
        <QuestionCard
          NUMBER={NUMBER}
          numberOfQuestion={numberOfQuestion}
          question={quiz[numberOfQuestion].question}
          multipleChoice={multipleChoice}
          isGameRunning={isGameRunning}
        />
      ) : null}
    </div>
  );
};

export default App;
