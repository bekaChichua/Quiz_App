import React from "react";

const QuestionCard = ({
  NUMBER,
  numberOfQuestion,
  question,
  multipleChoice,
  isGameRunning,
}) => {
  // const quizQuestion = quiz.map((question) => {
  //   return (
  //     <div>
  //       <p>{question[numberOfQuestion].question}</p>
  //     </div>
  //   );
  // });
  return (
    <div>
      <p>Score:</p>
      <p>
        question number {numberOfQuestion + 1}/{NUMBER}
      </p>
      <p>{question}</p>
      {/* {isGameRunning ? <p>{quiz[numberOfQuestion]}</p> : null} */}
      <button>multiple chice</button>
      <br />
      <button>next Question</button>
    </div>
  );
};

export default QuestionCard;
