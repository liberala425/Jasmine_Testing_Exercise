
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({amounts:100, years:1, rate:0.06})).toEqual(8.61);
});


it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment({amounts:100, years:1, rate:0.06}).toString()).toMatch(/^\d+\.\d\d$/);
});

it("should throw error for invalid inputs", function() {
  expect(calculateMonthlyPayment({})).toThrowError();
});

