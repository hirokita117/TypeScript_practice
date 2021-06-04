const first: string = 'aaaa';
console.log(first);

type AnalogClock = {
  longHand: string;
}

type DigitalClock = {
  longHand: number;
}

type LongHand<T> = T extends { longHand: infer U } ? U : never;

const longHandString: LongHand<AnalogClock> = '12:00';
const longHandNumber: LongHand<DigitalClock> = 12;

console.log([
  longHandString, longHandNumber
]);
