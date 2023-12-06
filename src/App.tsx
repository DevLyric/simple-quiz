import { useState } from "react";
import QuizGame from "./components/QuizGame";
import QuizScore from "./components/QuizScore";
import { questions } from "./data/data";

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const currentQuestion = questions[currentQuestionIndex];
  const isGameOver = currentQuestionIndex >= questions.length;

  return (
    <div className="h-screen w-full flex items-center justify-center">
      {isGameOver ? (
        <QuizScore
          score={score}
          questions={questions.length}
          onRestart={() => {
            setCurrentQuestionIndex(0);
            setScore(0);
          }}
        />
      ) : (
        <QuizGame
          question={currentQuestion.prompt}
          currentQuestion={currentQuestion.options}
          onSelectAnswer={(item: string) => {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            if (item === currentQuestion.correctAnswer) {
              setScore(score + 1);
            }
            console.log(item);
          }}
        />
      )}
    </div>
  );
}

export default App;
