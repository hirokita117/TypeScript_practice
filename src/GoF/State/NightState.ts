import { Clock } from "./Clock";
import { Context } from "./Context";
import { DayState } from "./DayState";
import { State } from "./State";

export class NightState implements State {
  private state = "夜間";

  private static singleton: NightState = new NightState();

  public static getInstance(): State {
    return this.singleton;
  }

  public doClock(context: Context, hour: number): void {
    if (!Clock.isNightTime(hour)) {
      context.changeState(DayState.getInstance());
    }
  }

  public doUse(context: Context): void {
    context.recordLog(`非常：${this}の金庫使用`);
  }

  public doAlarm(context: Context): void {
    context.callSecurityCenter(`非常ベル(${this})`);
  }

  public doPhone(context: Context): void {
    context.callSecurityCenter(`${this}の通話録音`);
  }

  public toString(): string {
    return `[${this.state}]`;
  }
}
