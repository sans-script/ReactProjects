## Using useRef to Manage Focus and Style in React

### Overview

This example demonstrates how to use the `useRef` hook in React to manage DOM element references without causing re-renders. The `useRef` hook is particularly useful for interacting with DOM elements directly, such as focusing on input fields and changing their styles.

### App Component

```javascript
import MyComponent from "./MyComponent";

function App() {
  return (
    <>
      <MyComponent />
    </>
  );
}

export default App;
```

The `App` component imports and renders `MyComponent`.

### MyComponent

```javascript
import React, { useRef, useEffect } from "react";

function MyComponent() {
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);

  useEffect(() => {
    console.log("COMPONENT RENDERED");
    console.log(inputRef1);
  }, []);

  function handleClick1() {
    inputRef1.current.focus();
    inputRef1.current.style.backgroundColor = "yellow";
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "";
  }

  function handleClick2() {
    inputRef2.current.focus();
    inputRef1.current.style.backgroundColor = "";
    inputRef2.current.style.backgroundColor = "yellow";
    inputRef3.current.style.backgroundColor = "";
  }

  function handleClick3() {
    inputRef3.current.focus();
    inputRef1.current.style.backgroundColor = "";
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "yellow";
  }

  return (
    <>
      <div>
        <button onClick={handleClick1}>Click Me</button>
        <input ref={inputRef1} type="text" />

        <button onClick={handleClick2}>Click Me</button>
        <input ref={inputRef2} type="text" />

        <button onClick={handleClick3}>Click Me</button>
        <input ref={inputRef3} type="text" />
      </div>
    </>
  );
}

export default MyComponent;
```

### Explanation

1. **useRef Initialization**:
   - `inputRef1`, `inputRef2`, and `inputRef3` are initialized using `useRef(null)`. These references will be used to directly interact with the input elements.

2. **useEffect Hook**:
   - The `useEffect` hook logs a message and the `inputRef1` object to the console whenever the component renders. This demonstrates that `useRef` doesn't trigger re-renders when its value changes.

3. **Event Handlers**:
   - `handleClick1`, `handleClick2`, and `handleClick3` functions are defined to handle button clicks. Each function:
     - Focuses on the corresponding input field using `inputRef.current.focus()`.
     - Changes the background color of the focused input field to yellow and resets the others to their default state.

4. **Component Render**:
   - The component renders three buttons and three input fields. Each button is associated with a corresponding event handler that focuses on the respective input field and changes its background color when clicked.

### CSS (Optional)

If you'd like to add some basic styling to enhance the visual presentation, you can include the following CSS:

```css
input {
  margin: 10px;
  padding: 5px;
  font-size: 16px;
}

button {
  margin: 10px;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
}
```

This CSS will add some margin, padding, and font size adjustments to the input fields and buttons for a better user experience.

### Conclusion

The `useRef` hook in React is a powerful tool for managing direct interactions with DOM elements without causing unnecessary re-renders. In this example, we demonstrated how to use `useRef` to manage focus and style changes for input fields, showcasing the practical applications of this hook in real-world scenarios.