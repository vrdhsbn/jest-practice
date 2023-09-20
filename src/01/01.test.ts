import { add, sub } from "./01";

describe("四則演算", () => {
  test('1+1=2', () => {
    expect(add(1, 1)).toBe(2)
  })

  test('2-1=1', () => {
    expect(sub(2, 1)).toBe(1)
  })
})