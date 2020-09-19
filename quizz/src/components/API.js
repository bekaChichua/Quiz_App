export const API = async (amount, difficulty) => {
  const endPoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
  const myData = await (await fetch(endPoint)).json();
  return myData.results.map((item) => ({
    ...item,
    allAnswers: shuffler([...item.incorrect_answers, item.correct_answer]),
  }));
};

const shuffler = (array) => [...array].sort(() => Math.random() - 0.5);
