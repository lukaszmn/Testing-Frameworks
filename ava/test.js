const test = require('ava');

const divide = require('../calculator');

test('should divide two numbers', t => {
	t.is(divide(10, 2), 5);
});

test('unexpected error', t => {
	t.is(divide(2, 0), 0);
});
