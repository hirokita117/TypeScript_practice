import { Support } from "./Support";
import { Trouble } from "./Trouble";

export class LimitSupport extends Support {
  public constructor(name: string, private limit: number) {
    super(name);
    this.limit = limit;
  }

  protected resolve(trouble: Trouble) {
    return trouble.getNumber() < this.limit;
  }
}
