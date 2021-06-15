import { Clock } from "./Clock";
import { Context } from "./Context";
import { DayState } from "./DayState";
import { State } from "./State";

export class SafeFrame implements Context {
  private state: State = DayState.getInstance();

  public setClock(hour: number) {
    let clockString = "現在時刻は";
    if (hour < 10) {
      clockString += `0${hour}:00`;
    } else {
      clockString += `${hour}:00`;
    }
    console.log(clockString);
    this.state.doClock(this, hour);
  }

  public changeState(state: State) {
    console.log(`${this.state}から${state}へ状態が変化しました`);
    this.state = state;
  }

  public setCallCenter(hour: number) {
    if (Clock.isNightTime(hour)) {
      this.state.doAlarm(this);
      this.state.doUse(this);
      return;
    }
    this.state.doPhone(this);
  }

  public callSecurityCenter(msg: string) {
    console.log(`call! ${msg} \n`);
  }

  public recordLog(msg: string) {
    console.log(`record... ${msg} \n`);
  }
}
