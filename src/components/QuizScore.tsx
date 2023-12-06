function QuizScore({
  score,
  questions,
  onRestart,
}: {
  score: number;
  questions: number;
  onRestart: () => void;
}) {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-3xl font-medium text-center">Score: {score}</h1>
      <p>
        você acertou {score}/{questions}
      </p>
      <button
        onClick={onRestart}
        className="bg-black text-white font-medium rounded p-2"
      >
        Tentar novamente
      </button>
    </div>
  );
}

export default QuizScore;
