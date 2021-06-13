import { Support } from "./Support";
import { Trouble } from "./Trouble";

export class OddSupport extends Support {
  public constructor(name: string) {
    super(name);
  }

  protected resolve(trouble: Trouble) {
    return trouble.getNumber() % 2 === 1;
  }
}
