const expect = require('chai').expect;

const divide = require('../calculator');

describe('Divide', () => {

	it('should divide two numbers', () => {
		expect(divide(10, 2)).to.equal(5);
	});

	it('unexpected error', () => {
		expect(divide(2, 0)).to.equal(0);
	});

});
