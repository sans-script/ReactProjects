## Digital Clock Component in React

### Overview

This project demonstrates a simple digital clock implemented in React. The clock updates every second to show the current time, including hours, minutes, seconds, and AM/PM.

### App Component

```javascript
import DigitalClock from "./DigitalClock.jsx";

function App() {
  return (
    <>
      <DigitalClock />
    </>
  );
}

export default App;
```

The `App` component is straightforward, importing and rendering the `DigitalClock` component.

### DigitalClock Component

```javascript
import React, { useState, useEffect } from "react";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function formatTime() {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridiem = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}  ${meridiem}`;
  }

  function padZero(number){
    return (number < 10 ? "0" : "") + number;
  }

  return (
    <>
      <div className="clock-container">
        <div className="clock">
          <span>{formatTime()}</span>
        </div>
      </div>
    </>
  );
}

export default DigitalClock;
```

#### Explanation

- **State Initialization**:
  - `time`: A state variable initialized with the current date and time.

- **useEffect Hook**:
  - Sets up an interval that updates the `time` state every second.
  - Returns a cleanup function that clears the interval when the component unmounts to prevent memory leaks.

  ```javascript
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  ```

- **formatTime Function**:
  - Formats the time to a 12-hour format with leading zeros for hours, minutes, and seconds.
  - Determines the AM/PM suffix.
  - `padZero` function ensures that numbers less than 10 are padded with a leading zero.

  ```javascript
  function formatTime() {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridiem = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}  ${meridiem}`;
  }

  function padZero(number){
    return (number < 10 ? "0" : "") + number;
  }
  ```

- **Rendering**:
  - The formatted time is displayed inside a div with appropriate classes for styling.

### CSS Styling

```css
@import url('https://fonts.googleapis.com/css2?family=Handlee&display=swap');

body {
  background-image: url(assets/starry_night.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  backdrop-filter: blur(4px);
}

.clock-container {
  /* Additional styles for the clock container can be added here */
}

.clock {
  color: rgba(250, 248, 232, 0.71);
  font-size: 6rem;
  font-weight: bold;
  font-family: "Handlee", cursive;
  font-weight: 400;
  font-style: normal;
  text-align: center;
}
```

#### Explanation

- **Body Styling**:
  - Sets a starry night background image, centered, covering the entire viewport, with a blur effect.
  - Centers the clock horizontally and vertically.

- **Clock Styling**:
  - Sets the clock text color, size, font family, and weight to achieve a visually appealing digital clock.

This setup results in a dynamic, stylish digital clock that updates in real-time and adjusts its appearance based on the window size.