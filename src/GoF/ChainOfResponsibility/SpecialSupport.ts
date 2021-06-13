import { Support } from "./Support";
import { Trouble } from "./Trouble";

export class SpecialSupport extends Support {
  public constructor(name: string, private number: number) {
    super(name);
  }

  protected resolve(trouble: Trouble) {
    return trouble.getNumber() === this.number;
  }
}
