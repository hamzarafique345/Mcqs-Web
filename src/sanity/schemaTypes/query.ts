import { client } from "../lib/client";


export async function getMCQs() {
  const query = `*[_type == "mcq"]{ question, options, correctAnswer }`;
  const mcqs = await client.fetch(query);
  return mcqs;
}

export async function getUserAnswers() {
  const query = `*[_type == "userAnswer"]{ name, email, profilePicture, score, testNumber, answers }`;
  const userAnswers = await client.fetch(query);
  return userAnswers;
}