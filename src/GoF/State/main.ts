import * as readlineSync from "readline-sync";

import { SafeFrame } from "./SafeFrame";

const frame = new SafeFrame();

for (let hour = 0; hour < 24; hour++) {
  try {
    frame.setClock(hour);
    if (readlineSync.keyInYN("金庫を使用しますか？")) {
      frame.setCallCenter(hour);
    } else {
      frame.recordLog("not use safe.");
    }
  } catch (error) {
    console.log(error);
  }
}
