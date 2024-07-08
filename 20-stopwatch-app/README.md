## Stopwatch Component in React

This example showcases how to build a stopwatch component using React, including the necessary styles and logic to start, stop, and reset the stopwatch. The `useRef` hook is used to manage references to the interval and start time without causing unnecessary re-renders.

### App Component

```javascript
import StopWatch from "./StopWatch.jsx";

function App() {
  return (
    <>
      <StopWatch />
    </>
  );
}

export default App;
```

The `App` component imports and renders the `StopWatch` component.

### StopWatch Component

```javascript
import React, { useState, useEffect, useRef } from "react";

function StopWatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalIdRef = useRef(null);
  const startTimeRef = useRef(0);

  useEffect(() => {
    if (isRunning) {
      intervalIdRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current);
      }, 10);
    }

    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, [isRunning]);

  function start() {
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;
  }

  function stop() {
    setIsRunning(false);
  }

  function reset() {
    setIsRunning(false);
    setElapsedTime(0);
  }

  function formatTime() {
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let milliseconds = Math.floor((elapsedTime % 1000) / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    return `${hours}:${minutes}:${seconds}:${milliseconds}`;
  }

  return (
    <>
      <div className="stopwatch">
        <div className="display">{formatTime()}</div>
        <div className="controls">
          <button onClick={start} className="start-button">
            Start
          </button>
          <button onClick={stop} className="stop-button">
            Stop
          </button>
          <button onClick={reset} className="reset-button">
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default StopWatch;
```

### Styles (CSS)

```css
body {
  display: flex;
  flex-direction: column;
  align-self: center;
  background-color: hsl(0, 0%, 95%);
}

.stopwatch {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 30px;
}

.display {
  font-size: 5rem;
  font-family: monospace;
  font-weight: bold;
  background-color: white;
  color: hsl(0, 0%, 30%);
  text-shadow: 2px 2px 2px hsla(0, 0%, 0%, 0.75);
  margin-bottom: 25px;
}

.controls button {
  font-size: 1.5rem;
  font-weight: bold;
  padding: 10px 20px;
  margin: 5px;
  min-width: 125px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  color: white;
  transition: background-color 0.5s ease;
}

.start-button {
  background-color: hsl(115, 100%, 52%);
}
.start-button:hover {
  background-color: hsl(115, 100%, 35%);
}

.stop-button {
  background-color: hsl(10, 90%, 50%);
}
.stop-button:hover {
  background-color: hsl(10, 90%, 45%);
}

.reset-button {
  background-color: hsl(205, 90%, 60%);
}
.reset-button:hover {
  background-color: hsl(205, 90%, 55%);
}
```

### Explanation

1. **State and Refs Initialization**:
   - `isRunning` and `elapsedTime` states are managed using `useState`.
   - `intervalIdRef` and `startTimeRef` are initialized using `useRef` to store references to the interval ID and start time, respectively.

2. **useEffect Hook**:
   - The `useEffect` hook starts the interval when `isRunning` is `true` and clears it when the component unmounts or `isRunning` changes.
   - Inside the interval, `elapsedTime` is updated based on the difference between the current time and `startTimeRef.current`.

3. **Event Handlers**:
   - `start` sets `isRunning` to `true` and adjusts `startTimeRef.current` to maintain the elapsed time.
   - `stop` sets `isRunning` to `false`.
   - `reset` stops the stopwatch and resets `elapsedTime` to `0`.

4. **formatTime Function**:
   - `formatTime` converts the `elapsedTime` into a formatted string representing hours, minutes, seconds, and milliseconds, ensuring each unit is padded to two digits.

5. **CSS Styling**:
   - Styles are provided for the stopwatch display and control buttons, including hover effects for the buttons.

This example demonstrates how to use `useState`, `useEffect`, and `useRef` to create a functional stopwatch component in React. The styles ensure a clean and user-friendly interface.