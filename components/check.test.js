// import sum from './sum';

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

function sum(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
function mult(a, b) {
  return a * b;
}
function div(a, b) {
  return a / b;
}

test('sum 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
test('subtract 2 - 1 to equal 1', () => {
    expect(sub(2, 1)).toBe(1);
});
test('multiply 1 * 2 to equal 2', () => {
  expect(mult(1, 2)).toBe(2);
});
test('divide 2 / 2 to equal 1', () => {
  expect(div(2, 2)).toBe(1);
});