import { Support } from "./Support";
import { Trouble } from "./Trouble";

export class LimitSupport extends Support {
  public constructor(name: string, private limit: number) {
    super(name);
    this.limit = limit;
  }

  protected resolve(trouble: Trouble) {
    /*
    console.log(this.toString());
    console.log(this.limit);
    console.log(trouble.getNumber() < this.limit);
    */
    return trouble.getNumber() < this.limit;
  }
}
