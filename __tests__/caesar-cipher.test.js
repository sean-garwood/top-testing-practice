import { caesarCipher } from "../src/caesar-cipher";

describe("caesarCipher", () => {
  it("should wrap from z to a", () => {
    expect(caesarCipher("z", 1)).toBe("a");
  });
  it("should preserve case", () => {
    expect(caesarCipher("Z", 1)).toBe("A");
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  });
  it("should preserve punctuation", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  });
  it("should handle negative shift", () => {
    expect(caesarCipher("a", -1)).toBe("z");
  });
});
