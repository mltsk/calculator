import calculate from '../src/calculate';
import parser from '../src/parser';
import expressions from '../__fixtures__/expressions';
import formatNumber from '../src/helpers/formatNumber';
import numbers from '../__fixtures__/numbers';

describe('parser function', () => {
  it.each(expressions)("should return correct parsed data of expression: '$expression'", ({ expression, parsedExpression }) => {
    const actual = parser(expression);
    expect(actual).toEqual(parsedExpression);
  });
});

describe('calculate function', () => {
  it.each(expressions)("should return correct calculate data of parsed expression: '$parsedExpression'", ({ parsedExpression, result }) => {
    const actual = calculate(parsedExpression);
    expect(actual).toEqual(result);
  });
});

describe('formatNumber function', () => {
  it.each(numbers)("should return correct formatted data of number: '$number'", ({ number, result }) => {
    const actual = formatNumber(number);
    expect(actual).toEqual(result);
  });
});
