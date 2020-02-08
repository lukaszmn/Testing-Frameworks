const assert = require('assert');

const divide = require('../calculator');

describe('Divide', () => {

	it('should divide two numbers', () => {
		assert.equal(5, divide(10, 2), '10/2=5');
	});

	it('unexpected error', () => {
		assert.equal(0, divide(2, 0));
	});

});
