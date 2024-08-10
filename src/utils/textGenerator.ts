import { generate } from "random-words";

export function generateText(again:boolean):(string|string[]) {
  let numOfWords = again? 15: 40;
  const words = generate(numOfWords);
  return words;
}