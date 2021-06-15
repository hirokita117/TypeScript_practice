export class Clock {
  public static isNightTime(hour: number): boolean {
    return hour < 9 || 17 <= hour;
  }
}
