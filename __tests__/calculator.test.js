import { Calculator } from "../src/Calculator";

describe("Calculator", () => {
  // check that it is an object
  it("should be an object", () => {
    expect(typeof Calculator).toBe("object");
  });
  /* check for methods:
   *
   * add
   * subtract
   * multiply
   * divide
   */
  it("should have an add method", () => {
    expect(typeof Calculator.add).toBe("function");
  });
  it("should have a subtract method", () => {
    expect(typeof Calculator.subtract).toBe("function");
  });
  it("should have a multiply method", () => {
    expect(typeof Calculator.multiply).toBe("function");
  });
  it("should have a divide method", () => {
    expect(typeof Calculator.divide).toBe("function");
  });
});

describe("Calculator.add", () => {
  it("should return the sum of two numbers", () => {
    expect(Calculator.add(1, 2)).toBe(3);
    expect(Calculator.add(1, 2)).not.toBe(1);
  });
});

describe("Calculator.subtract", () => {
  it("should return the difference of two numbers", () => {
    expect(Calculator.subtract(2, 1)).toBe(1);
    expect(Calculator.subtract(2, 1)).not.toBe(2);
  });
});

describe("Calculator.multiply", () => {
  it("should return the product of two numbers", () => {
    expect(Calculator.multiply(2, 2)).toBe(4);
    expect(Calculator.multiply(2, 2)).not.toBe(2);
  });
});

describe("Calculator.divide", () => {
  it("should return the quotient of two numbers", () => {
    expect(Calculator.divide(4, 2)).toBe(2);
    expect(Calculator.divide(4, 2)).not.toBe(4);
  });
  it("should throw an error if the divisor is zero", () => {
    expect(() => Calculator.divide(4, 0)).toThrow("Cannot divide by zero");
  });
});
