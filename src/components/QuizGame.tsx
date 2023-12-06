function QuizGame({
  question,
  currentQuestion,
  onSelectAnswer,
}: {
  question: string;
  currentQuestion: string[];
  onSelectAnswer: (item: string) => void;
}) {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-2xl">{question}</h1>

      {currentQuestion.map((item) => {
        return (
          <button
            className="bg-black text-white font-medium rounded p-2"
            onClick={() => onSelectAnswer(item)}
            key={item}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}

export default QuizGame;
