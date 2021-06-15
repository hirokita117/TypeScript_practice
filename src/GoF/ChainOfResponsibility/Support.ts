import { Trouble } from "./Trouble";

export abstract class Support {
  private next: Support | undefined;

  public constructor(private name: string) {}

  public setNext(next: Support) {
    this.next = next;
    return next;
  }

  public support(trouble: Trouble) {
    if (this.resolve(trouble)) {
      this.done(trouble);
    } else if (this.next) {
      this.next.support(trouble);
    } else {
      this.fail(trouble);
    }
  }

  public toString() {
    return `[${this.name}]`;
  }

  protected done(trouble: Trouble) {
    console.log(`${trouble} is resolved by ${this}`);
  }

  protected fail(trouble: Trouble) {
    console.log(`${trouble} can not be resolved.`);
  }

  protected abstract resolve(trouble: Trouble): boolean;
}
