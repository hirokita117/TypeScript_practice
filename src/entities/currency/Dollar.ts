export class Dollar {
  public constructor(private amount: number) {}

  public times(multiplier: number) {
    return multiplier * this.amount;
  }
}
