import { Support } from "./Support";
import { Trouble } from "./Trouble";

export class NoSupport extends Support {
  public constructor(name: string) {
    super(name);
  }

  protected resolve(trouble: Trouble) { // eslint-disable-line
    return false;
  }
}
