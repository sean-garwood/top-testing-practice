import { capitalize } from "../src/capitalize.js";

describe("capitalize", () => {
  it("should return a capitalized string", () => {
    expect(capitalize("hello")).toBe("Hello");
  });
  it("should not return a string that does not have the first char capitalized", () => {
    expect(capitalize("hello")).not.toBe("hello");
  });
});
