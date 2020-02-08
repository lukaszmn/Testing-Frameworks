const assert = require('assert');

const divide = require('../calculator');

suite('Divide', () => {

	spec('should divide two numbers', () => {
		assert.equal(divide(10, 2), 5);
	});

	spec('unexpected error', () => {
		assert.equal(divide(2, 0), 0);
	});

});
