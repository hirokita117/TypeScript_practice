import * as colors from "colors";
import * as readlineSync from "readline-sync";

import { SafeFrame } from "./SafeFrame";

const frame = new SafeFrame();

for (let hour = 0; hour < 24; hour++) {
  try {
    frame.setClock(hour);
    if (readlineSync.keyInYN("テスト")) {
      console.log(colors.bgGreen("yes"));
    } else {
      console.log(colors.bgRed("no"));
    }
  } catch (error) {
    console.log(error);
  }
}
