const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  it("should return 'Yes' if passed true", () => {
    expect(booleanToWord(2 * 2 === 4)).toEqual("Yes");
    expect(booleanToWord(1 == "1")).toEqual("Yes");
  });

  it("should return 'No' if passed false", () => {
    expect(booleanToWord(2 * 2 === 5)).toEqual("No");
    expect(booleanToWord(1 === "1")).toEqual("No");
  });
});
