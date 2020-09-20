import React from "react";

const QuestionCard = ({
  NUMBER,
  numberOfQuestion,
  question,
  multipleChoice,
  isGameRunning,
  nextQuestion,
}) => {
  const quizQuestion = multipleChoice.map((question) => {
    return <button key={Math.random()}>{question}</button>;
  });
  return (
    <div>
      <p>Score:</p>
      <p>
        question number {numberOfQuestion + 1}/{NUMBER}
      </p>
      <p>{question}</p>

      {quizQuestion}
      <br />
      {NUMBER === numberOfQuestion + 1 ? (
        <button onClick={nextQuestion}>Submit</button>
      ) : (
        <button onClick={nextQuestion}>next Question</button>
      )}
    </div>
  );
};

export default QuestionCard;
