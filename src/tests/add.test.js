const add = (a, b) => a + b;
const generateGreeting = (name) => `Hello ${name}!`

test('should add two number', () => {
  const result = add(3, 4);

  expect(result).toBe(7);
});

test('Say hello to users name', () => {
  const greeting = generateGreeting('Josh');

  expect(greeting).toBe('Hello Josh!');
});