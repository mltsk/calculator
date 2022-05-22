export const KEYS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '/', '-', '+', ',', 'x', '(', ')', '%'];
export const binaryOperators = ['+', '-', '*', '/'];
export const unaryOperators = ['√', '%'];
export const allOperators = [...binaryOperators, ...unaryOperators];
export const bodyNumberSymbols = [
  '.',
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
];
export const firstNumberSymbols = ['-', ...bodyNumberSymbols];
export const bracket = ['(', ')'];

interface IPriority {
  [key: string]: number;
}

export const priority: IPriority = {
  "+": 1,
  "-": 1,
  "*": 2,
  "/": 2,
  "%": 3,
  "√": 3,
};

