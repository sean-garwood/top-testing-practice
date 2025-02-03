import { analyzeArray } from "../src/analyze-array";
const TestArray = [1, 2, 3, 4, 5];
describe("analyzeArray", () => {
  it("should return an object", () => {
    expect(typeof analyzeArray(TestArray)).toBe("object");
  });
  it("should return an object with keys average, min, max, and length", () => {
    expect(analyzeArray(TestArray)).toHaveProperty("average");
    expect(analyzeArray(TestArray)).toHaveProperty("min");
    expect(analyzeArray(TestArray)).toHaveProperty("max");
    expect(analyzeArray(TestArray)).toHaveProperty("length");
  });
  it("should return the average of the array", () => {
    expect(analyzeArray(TestArray).average).toBe(3);
  });
  it("should return the min of the array", () => {
    expect(analyzeArray(TestArray).min).toBe(1);
  });
  it("should return the max of the array", () => {
    expect(analyzeArray(TestArray).max).toBe(5);
  });
  it("should return the length of the array", () => {
    expect(analyzeArray(TestArray).length).toBe(5);
  });
});
