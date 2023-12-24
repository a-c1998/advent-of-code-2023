import { readFileSync } from "node:fs";
import path from "node:path";

const input = readFileSync(path.resolve(__dirname, "input.txt"), "utf8");

// the input has no `'0'`s
const digits = new Set(["1", "2", "3", "4", "5", "6", "7", "8", "9"]);

let sum = 0;
for (const line of input.split("\n")) {
  let firstDigit: string = "";
  for (const char of line) {
    if (digits.has(char)) {
      firstDigit = char;
      break;
    }
  }
  if (!firstDigit) {
    throw new Error(`No first digit found in line: ${line}`);
  }

  let lastDigit: string = "";
  for (let i = line.length - 1; i >= 0; i--) {
    if (digits.has(line[i])) {
      lastDigit = line[i];
      break;
    }
  }
  if (!lastDigit) {
    throw new Error(`No last digit found in line: ${line}`);
  }

  const lineNum = Number(`${firstDigit}${lastDigit}`);
  console.log({ line }, { lineNum });
  sum += lineNum;
}

console.log({ sum });
