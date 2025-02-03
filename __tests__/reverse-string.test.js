import { reverseString } from "../src/reverse-string.js";

describe("reverseString", () => {
  it("should return the reversed argument string", () => {
    expect(reverseString("hello")).toBe("olleh");
  });
  it("should not return the argument string if it is not reversed", () => {
    expect(reverseString("hello")).not.toBe("hello");
  });
});
