import { Clock } from "./Clock";
import { Context } from "./Context";
import { NightState } from "./NightState";
import { State } from "./State";

export class DayState implements State {
  private state = "昼間";

  private static singleton: DayState = new DayState();

  public static getInstance(): State {
    return this.singleton;
  }

  public doClock(context: Context, hour: number): void {
    if (Clock.isNightTime(hour)) {
      context.changeState(NightState.getInstance());
    }
  }

  public doUse(context: Context): void {
    context.recordLog(`金庫使用（${this}）`);
  }

  public doAlarm(context: Context): void {
    context.callSecurityCenter(`非常ベル(${this})`);
  }

  public doPhone(context: Context): void {
    context.callSecurityCenter(`通常の通話(${this})`);
  }

  public toString(): string {
    return `[${this.state}]`;
  }
}
