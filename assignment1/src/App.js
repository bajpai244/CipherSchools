import { useState } from "react";
import "./App.css";

function App() {
  const [s1, setS1] = useState(0);
  const [s2, setS2] = useState(0);
  const [m1, setM1] = useState(0);
  const [m2, setM2] = useState(0);
  const [interval, _setInterval] = useState(null);

  const arr = [setS2, setS1, setM2, setM1];

  const count = () => {
    for (let i = 0; i < arr.length; i += 1) {
      const setState = arr[i];
      const maxVal = setState === setS1 || setState == setM1 ? 5 : 9;
      let pass = false;

      setState((val) => {
        if (val < maxVal) {
          pass = true;
          return val + 1;
        } else {
          return 0;
        }
      });

      if (pass) {
        break;
      }
    }
  };

  const start = () => {
    _setInterval(setInterval(count, 1000));
  };

  const stop = () => {
    _setInterval((interval) => {
      clearInterval(interval);
      return interval;
    });
  };

  const reset = () => {
    stop();
    arr.forEach((setState) => {
      setState(0);
    });
  };

  return (
    <>
      <head>
        <title>Stopwatch</title>
      </head>
      <div className="App">
        <header className="App-header">
          <h2>CIPHER SCHOOL REACT ASSIGNMENT</h2>
        </header>
        <section>
          <h3>
            <span id="time">{`${m1}${m2}:${s1}${s2}`}</span>
          </h3>

          <div className="container">
            <button onClick={start}>start</button>
            <button onClick={stop}>stop</button>
            <button onClick={reset}>reset</button>
          </div>

          <div className="info">
            <br />
            <p>made by - Harsh Bajpai</p>
            <p>registration number - 11901804</p>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
