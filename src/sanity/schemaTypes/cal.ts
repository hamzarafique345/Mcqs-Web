
interface MCQ {
  correctAnswer: string;
}

export function calculateScore(userAnswers: string[], mcqs: MCQ[]): number {
  let score = 0;

  // Loop through the userAnswers and compare them with the correct answers from mcqs
  userAnswers.forEach((answer, index) => {
    if (answer === mcqs[index].correctAnswer) {
      score++;
    }
  });

  return score;
}
