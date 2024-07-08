## Form Handling and State Management - onChange 

### [App.jsx](./src/App.jsx)

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

- **Imports**: Imports `MyComponent` for rendering within the `App` component.
- **Rendering**: Renders the `MyComponent` component.

### [MyComponent.jsx](./src/MyComponent.jsx)

```javascript
import { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("Guest");
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("Delivery");

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleQuantityChange(event) {
    setQuantity(event.target.value);
  }

  function handleCommentChange(event) {
    setComment(event.target.value);
  }

  function handlePaymentChange(event) {
    setPayment(event.target.value);
  }

  function handleShippingChange(event) {
    setShipping(event.target.value);
  }

  return (
    <>
      <div>
        <input value={name} onChange={handleNameChange} />
        <p>Name: {name}</p>

        <input
          value={quantity}
          type="number"
          onChange={handleQuantityChange}
        />
        <p>Quantity: {quantity}</p>

        <textarea
          value={comment}
          placeholder="Enter delivery instructions"
          onChange={handleCommentChange}
        />
        <p>Comment: {comment}</p>

        <select value={payment} onChange={handlePaymentChange}>
          <option value="">Select an option</option>
          <option value="Visa">Visa</option>
          <option value="Mastercard">Mastercard</option>
          <option value="Giftcard">Giftcard</option>
        </select>
        <p>Payment: {payment}</p>

        <label>
          <input
            type="radio"
            value="Pick Up"
            checked={shipping === "Pick Up"}
            onChange={handleShippingChange}
          />
          Pick Up
        </label>

        <label>
          <input
            type="radio"
            value="Delivery"
            checked={shipping === "Delivery"}
            onChange={handleShippingChange}
          />
          Delivery
        </label>
        <p>Shipping: {shipping}</p>
      </div>
    </>
  );
}

export default MyComponent;
```

### Explanation

#### Form Handling and State Management

- **State Variables**: Utilizes `useState` hook to manage multiple state variables:
  - `name`: Stores the name input value.
  - `quantity`: Stores the quantity input value (as a number).
  - `comment`: Stores the comment input value from the textarea.
  - `payment`: Stores the selected payment option from the dropdown.
  - `shipping`: Stores the selected shipping method (radio button).

- **Event Handlers**: Defines functions (`handleNameChange`, `handleQuantityChange`, `handleCommentChange`, `handlePaymentChange`, `handleShippingChange`) to update respective state variables using `set` functions provided by `useState`.

- **Form Inputs**:
  - **Input**: Captures and displays `name` input value dynamically.
  - **Number Input**: Captures and displays `quantity` input value as a number.
  - **Textarea**: Captures and displays `comment` input value for delivery instructions.
  - **Dropdown (Select)**: Allows selection of `payment` method and displays the selected option.
  - **Radio Buttons**: Allows selection of `shipping` method (`Pick Up` or `Delivery`) and displays the selected option.

- **onChange Event**: Used with form elements (`input`, `textarea`, `select`, `radio`) to trigger respective event handlers (`handleNameChange`, `handleQuantityChange`, `handleCommentChange`, `handlePaymentChange`, `handleShippingChange`) every time the value of the input changes.

### Conclusion

This component (`MyComponent`) demonstrates how to manage form inputs and state using React hooks (`useState`). It handles different types of form elements and updates their corresponding state variables dynamically. The use of `useState` simplifies state management in functional components, making them reactive to user inputs and ensuring smooth interaction in React applications.