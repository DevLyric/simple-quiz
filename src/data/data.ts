interface Question {
  prompt: string;
  correctAnswer: string;
  options: string[];
}

export const questions: Question[] = [
  {
    prompt: "Qual é a cor do céu?",
    correctAnswer: "azul",
    options: ["azul", "vermelho", "rosa", "cinza"],
  },
  {
    prompt: "Qual animal faz au au?",
    correctAnswer: "cachorro",
    options: ["golfinho", "papagaio", "cachorro", "baleia"],
  },
  {
    prompt: "Qual a tradução de moon?",
    correctAnswer: "lua",
    options: ["quadra", "lua", "sol", "mar"],
  },
];
