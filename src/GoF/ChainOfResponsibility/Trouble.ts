export class Trouble {
  public constructor(private number: number) {
    this.number = number;
  }

  public getNumber(): number {
    return this.number;
  }

  public toString() {
    return `[Trouble ${this.number}]`;
  }
}
