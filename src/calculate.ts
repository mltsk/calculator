import { allOperators, binaryOperators, priority } from './constants/constants';

const getLast = (arr: any[]) => arr[arr.length - 1];

const executeOperation = (numbersStack: number[], operatorStack: string[]) => {
  const operator = operatorStack[operatorStack.length - 1];
  const firstNumber = Number(numbersStack[numbersStack.length - 2]);
  const secondNumber = Number(numbersStack[numbersStack.length - 1]);

  switch (operator) {
    case "+":
      return firstNumber + secondNumber;
    case "-":
      return firstNumber - secondNumber;
    case "*":
      return firstNumber * secondNumber;
    case "/":
      return firstNumber / secondNumber;
    case "%":
      return secondNumber / 100;
    case "√":
      return Math.sqrt(secondNumber);
    default:
      throw Error(`Unknown operator: ${operator}`);
  }
};

const addResult = (
  numbersStack: number[],
  operatorStack: string[],
  result: number
) => {
  const operator = operatorStack.pop();
  if (binaryOperators.includes(operator)) {
    numbersStack.pop();
  }
  numbersStack.pop();
  numbersStack.push(result);
};

const calculate = (expression: (string | number)[]): number => {
  const numbersStack: number[] = [];
  const operatorStack: string[] = [];

  for (let i = 0; i < expression.length; i += 1) {
    const char = expression[i];

    if (char === "(") {
      operatorStack.push(char);
    } else if (char === ")") {
      while (getLast(operatorStack) !== "(") {
        const result = executeOperation(numbersStack, operatorStack);
        addResult(numbersStack, operatorStack, result);
      }
      operatorStack.pop();
    } else if (typeof char === "number") {
      numbersStack.push(char);
    } else if (allOperators.includes(char)) {
      if (!operatorStack.length) {
        operatorStack.push(char);
      } else if (getLast(operatorStack) === "(") {
        operatorStack.push(char);
      } else if (priority[char] > priority[getLast(operatorStack)]) {
        operatorStack.push(char);
      } else if (priority[char] <= priority[getLast(operatorStack)]) {
        while (priority[char] <= priority[getLast(operatorStack)]) {
          const result = executeOperation(numbersStack, operatorStack);
          addResult(numbersStack, operatorStack, result);
        }
        operatorStack.push(char);
      }
    }

    if (i === expression.length - 1) {
      while (operatorStack.length !== 0) {
        const result = executeOperation(numbersStack, operatorStack);
        addResult(numbersStack, operatorStack, result);
      }
    }
  }

  return numbersStack[0];
};

export default calculate;
