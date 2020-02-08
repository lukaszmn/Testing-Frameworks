define(['calculator'], divide => {

	describe('Divide', () => {

		it('should divide two numbers', () => {
			expect(divide(10, 2)).toBe(5);
		});

		it('unexpected error', () => {
			expect(divide(2, 0)).toBe(0);
		});

	});

});
