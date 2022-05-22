import parser from './parser';
import calculate from './calculate';
import formatNumber from './helpers/formatNumber';

const runCalculation = (expression: string): string => {
  const parsedExpression = parser(expression);
  const calculationResult = calculate(parsedExpression);
  const formattedNumber = String(formatNumber(calculationResult));
  return formattedNumber;
};

export default runCalculation;
