const divide = require('../calculator');

test('should divide two numbers', () => {
	expect(divide(10, 2)).toBe(5);
});

test('unexpected error', () => {
	expect(divide(2, 0)).toBe(0);
});
