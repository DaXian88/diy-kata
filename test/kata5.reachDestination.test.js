const { reachDestination } = require("../src");

describe("reachDestination", () => {
  test("returns string with estimated time of arrival", () => {
    expect(reachDestination(44, 10)).toEqual("I should be there in 4.5 hours.");
    expect(reachDestination(55, 10)).toEqual("I should be there in 6 hours.");
    expect(reachDestination(66, 20)).toEqual("I should be there in 3.5 hours.")
    expect(reachDestination(12, 5)).toEqual("I should be there in 2.5 hours.")
  });
});
