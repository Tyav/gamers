const solution = require('./solution');

test('for a simple case', () => {
  const num1 = 2;
  const num2 = 7;
  expect(solution(num1, num2))
    .toBe(8);
});

test('for a case where a negative value is passed', () => {
  const num1 = -2;
  const num2 = 7;
  expect(solution(num1, num2))
    .toBe(4);
});

test('for a case where both numbers are zero', () => {
  const num1 = 0;
  const num2 = 0;
  expect(solution(num1, num2))
    .toBe(-1);
});