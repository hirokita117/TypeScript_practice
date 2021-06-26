export class Dollar {
  public constructor(private amount: number) {}

  public times(multiplier: number) {
    return new Dollar(multiplier * this.amount);
  }

  public equals(dollar: Dollar): boolean {
    return this.amount === dollar.amount;
  }
}
