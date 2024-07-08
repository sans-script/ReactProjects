## useEffect Hook in React

### Overview

The `useEffect` hook in React allows you to perform side effects in your components. Side effects include operations such as data fetching, subscriptions, or manually changing the DOM. By using `useEffect`, you can control when these side effects run, making it easier to manage your component's lifecycle.

### App Component

```javascript
import MyComponent from "./MyComponent.jsx";

function App() {
  return (
    <>
      <MyComponent />
    </>
  );
}
export default App;
```

The `App` component imports and renders the `MyComponent` component.

### MyComponent Component

```javascript
import { useEffect, useState } from "react";

function MyComponent() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");

  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("EVENT LISTENER ADDED");

    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("EVENT LISTENER REMOVED");
    };
  }, []);

  useEffect(() => {
    document.title = `Size: ${width} x ${height}`;
  }, [width, height]);

  useEffect(() => {
    document.title = `Count: ${count} ${color}`;
  }, [count, color]);

  function addCount() {
    setCount((c) => c + 1);
  }

  function SubtractCount() {
    setCount((c) => c - 1);
  }

  function changeColor() {
    setColor((c) => (c === "green" ? "red" : "green"));
  }

  function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  return (
    <>
      <p style={{ color: color }}>Count: {count}</p>
      <button onClick={addCount}>Add</button>
      <button onClick={SubtractCount}>Subtract</button> <br />
      <button onClick={changeColor}>Change Color</button>
      <p>Window Width: {width}px</p>
      <p>Window Height: {height}px</p>
    </>
  );
}

export default MyComponent;
```

### Explanation

#### State Initialization

- **State Variables**:
  - `count`: Tracks the count value, initialized to `0`.
  - `color`: Tracks the color of the text, initialized to `"green"`.
  - `width` and `height`: Track the window's width and height, initialized to the current window dimensions.

#### useEffect Hook

1. **Adding Event Listener**:
   - Adds an event listener for the window resize event.
   - Logs to the console when the event listener is added.
   - **Cleanup Function**:
     - Removes the event listener when the component unmounts.
     - Logs to the console when the event listener is removed.
   - **Dependencies**: Empty array (`[]`), so this effect runs only on mount and unmount.

   ```javascript
   useEffect(() => {
     window.addEventListener("resize", handleResize);
     console.log("EVENT LISTENER ADDED");

     return () => {
       window.removeEventListener("resize", handleResize);
       console.log("EVENT LISTENER REMOVED");
     };
   }, []);
   ```

2. **Updating Document Title with Window Size**:
   - Updates the document title to reflect the window's current width and height whenever they change.
   - **Dependencies**: `[width, height]`, so this effect runs on mount and whenever `width` or `height` changes.

   ```javascript
   useEffect(() => {
     document.title = `Size: ${width} x ${height}`;
   }, [width, height]);
   ```

3. **Updating Document Title with Count and Color**:
   - Updates the document title to reflect the current count and color whenever they change.
   - **Dependencies**: `[count, color]`, so this effect runs on mount and whenever `count` or `color` changes.

   ```javascript
   useEffect(() => {
     document.title = `Count: ${count} ${color}`;
   }, [count, color]);
   ```

#### Event Handlers

- **addCount**: Increments the count by 1.
  ```javascript
  function addCount() {
    setCount((c) => c + 1);
  }
  ```

- **SubtractCount**: Decrements the count by 1.
  ```javascript
  function SubtractCount() {
    setCount((c) => c - 1);
  }
  ```

- **changeColor**: Toggles the text color between green and red.
  ```javascript
  function changeColor() {
    setColor((c) => (c === "green" ? "red" : "green"));
  }
  ```

- **handleResize**: Updates the width and height state variables with the current window dimensions.
  ```javascript
  function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }
  ```

#### Rendering

- Displays the count with the current color.
- Provides buttons to increment, decrement, and change the color of the count.
- Displays the current window width and height.

### Uses of useEffect

1. **Event Listeners**: Adding and cleaning up event listeners for window resize.
2. **DOM Manipulation**: Updating the document title based on state changes.
3. **Fetching Data**: Although not included in this example, `useEffect` is commonly used for fetching data from an API.
4. **Real-Time Updates**: Subscribing to real-time updates (e.g., WebSocket, Firebase) can be managed using `useEffect`.
5. **Cleanup**: Cleaning up resources or subscriptions when a component unmounts.