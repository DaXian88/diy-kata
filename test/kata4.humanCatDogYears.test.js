const { humanCatDogYears } = require("../src");
describe("humanCatDogYears", () => {
  it("Returns an array of human, cat and dog years when passed a number equal to human years", () => {
    expect(humanCatDogYears(10)).toEqual([10, 56, 64]);
    expect(humanCatDogYears(1)).toEqual([1, 15, 15]);
    expect(humanCatDogYears(2)).toEqual([2, 24, 24]);
  });
});
