import React, { useState, useEffect } from "react";
import QuestionCard from "./components/QuestionCard";
import { API } from "./components/API";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [quiz, setQuiz] = useState([]);
  const [numberOfQuestion, setNumberOfQuestion] = useState(0);
  const [difficulty, setDifficulty] = useState("");
  const [isGameRunning, setIsGameRunning] = useState(false);
  const [userAnswer, setUserAnswer] = useState("");
  // const [question, setQuestion] = useState("");
  const NUMBER = 10;
  // console.log(myData);
  // console.log(API(NUMBER, "easy"));

  const startGame = async () => {
    setIsGameRunning(true);
    setNumberOfQuestion(0);
    setLoading(true);
    const newQuiz = await API(NUMBER, "easy");
    setQuiz(newQuiz);
    setLoading(false);
  };

  const nextQuestion = () => {
    setNumberOfQuestion((prevState) => prevState + 1);
    NUMBER === numberOfQuestion + 1 && setIsGameRunning(false);
  };

  // const handleUserAnswer = {
  //   setUserAnswer()
  // };

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
          multipleChoice={quiz[numberOfQuestion].allAnswers}
          isGameRunning={isGameRunning}
          nextQuestion={nextQuestion}
        />
      ) : null}
    </div>
  );
};

export default App;
