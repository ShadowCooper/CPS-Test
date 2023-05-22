/*
CPS Tester App
- Press the screen to start the timer and count the number of clicks and the timer
- After 10 seconds, the timer stops and the CPS is displayed
- After another 2 seconds, the timer resets and the CPS is reset
*/

import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";

console.log("Program started");
let timerCount = 0;

export default function App() {
  const [c, setC] = useState(0);

  // function to start timer if it's not started and setC
  function press() {
    if (timerCount === 0) {
      timerCount = 1;
      let timer = setInterval(() => {
        timerCount++;
        console.log(timerCount - 1);
        if (timerCount === 11) {
          clearInterval(timer);
        }
      }, 1000);
    }

    if (0 < timerCount && timerCount < 11) {
      setC(c + 1);
    }
  }

  function output() {
    console.log(`${timerCount} seconds`);
    if (timerCount === 0) {
      return "Click to start";
    } else if (timerCount === 10) {
      return "CPS: " + c / 10;
    } else if (c !== 0) {
      return c + " clicks";
    }
  }

  return (
    <TouchableWithoutFeedback onPress={press}>
      <View style={styles.container}>
        <Text style={{ fontSize: 50 }}>{output()}</Text>
        <Text style={{ fontSize: 30 }}>
          {0 < timerCount && timerCount < 10 ? timerCount + " seconds" : ""}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? 20 : 0,
  },
});

