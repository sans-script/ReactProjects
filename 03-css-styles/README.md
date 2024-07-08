## How to Style React Components with CSS

### Introduction

Styling React components can be approached in various ways depending on the project's needs. This guide will cover three primary methods for styling components in React: External CSS, CSS Modules, and Inline Styles. Each method has its use cases, advantages, and disadvantages. We'll use a `Button` component as an example to demonstrate each approach.

### Project Overview

This project demonstrates how to style React components using different CSS methodologies. It includes a main application component (`App.jsx`) that renders a `Button` component styled using each of the three methods.

### [App.jsx](./src/App.jsx)

The `App.jsx` file serves as the main component of the application, rendering the `Button` component.

```javascript
import Button from './Button/Button';

function App() {
  return (
    <>
      <Button />
    </>
  );
}

export default App;
```

### [Button.jsx](./src/Button/Button.jsx)

The `Button.jsx` file defines a `Button` component that can be styled using different CSS methods.

```javascript
// import styles from './Button.module.css'

function Button() {
  const styles = {
    backgroundColor: "hsl(200, 100%, 50%)",
    color: "white",
    padding: "10px 10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  return (
    // <button className="button">Click me</button> // External CSS
    // <button className={styles.button}>Click me</button> // CSS Modules
    <button style={styles}>Click me</button> // Inline Styles
  );
}

export default Button;
```

### Styling Methods

### 1. External CSS

External CSS is suitable for global styles or small projects where styles are applied globally across multiple components. The styles are defined in a separate `.css` file and imported into the relevant components.

### [index.css](./src/index.css)

```css
.button {
  background-color: hsl(200, 100%, 50%);
  color: white;
  padding: 10px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
```

To apply these styles, import the `index.css` file in your `Button.jsx` and use the `className` attribute.

```javascript
import './index.css';

function Button() {
  return (
    <button className="button">Click me</button>
  );
}

export default Button;
```

### 2. CSS Modules

CSS Modules allow for scoped CSS by automatically generating unique class names. This method is ideal for individual components and unique styles, preventing class name collisions.

### [Button.module.css](./src/Button/Button.module.css)

```css
.button {
  background-color: hsl(200, 100%, 50%);
  color: white;
  padding: 10px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
```

To use CSS Modules, import the styles as an object and apply them using the `className` attribute.

```javascript
import styles from './Button.module.css';

function Button() {
  return (
    <button className={styles.button}>Click me</button>
  );
}

export default Button;
```

### 3. Inline Styles

Inline styles are defined directly within the component using JavaScript objects. This method is useful for small components and minimal styles but lacks support for pseudo-classes and media queries.

```javascript
function Button() {
  const styles = {
    backgroundColor: "hsl(200, 100%, 50%)",
    color: "white",
    padding: "10px 10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  return (
    <button style={styles}>Click me</button>
  );
}

export default Button;
```

### Conclusion

Each styling method in React has its advantages and specific use cases:

- **External CSS**: Best for global styles or small projects.
- **CSS Modules**: Ideal for individual components and avoiding style conflicts.
- **Inline Styles**: Suitable for small components and minimal styles.

Choose the method that best fits your project requirements and coding preferences.