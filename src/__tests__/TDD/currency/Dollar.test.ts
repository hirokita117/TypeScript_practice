import { Dollar } from "../../../TDD/currency/Dollar";

describe("Dollar test", () => {
  test("times", () => {
    const dollar = new Dollar(10);
    const result = dollar.times(10);
    expect(result).toStrictEqual(new Dollar(100));
  });

  test("equals", () => {
    const dollarA = new Dollar(10);
    const dollarB = new Dollar(20);
    expect(dollarA.equals(dollarB)).toBeFalsy();

    const dollarC = new Dollar(10);
    expect(dollarA.equals(dollarC)).toBeTruthy();
  });
});
