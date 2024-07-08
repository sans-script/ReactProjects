# Cards Components

## Project Overview

This project demonstrates the basic structure and components of a React application that focuses on displaying multiple card components. It includes a main application component (`App.jsx`), along with a `Card` component (`Card.jsx`) that is used to display individual cards.

### [App.jsx](./src/App.jsx)

The `App.jsx` file serves as the main component of the application. It imports and utilizes the `Card` component to construct the structure of the webpage, displaying multiple card instances.

```javascript
import Card from "./Card";

function App() {
  return (
    <>
      <Card />
      <Card />
      <Card />
      <Card />
    </>
  );
}

export default App;
```

- **Imports**: The `App` component imports the `Card` component.
- **Function Definition**: The `App` function returns a JSX fragment containing multiple instances of the `Card` component.
- **Export**: The `App` component is exported as the default export of the module.

### [Card.jsx](./src/Card.jsx)

The `Card.jsx` file defines a `Card` component that displays a card with an image, a title, and a description. It demonstrates the use of JSX to create a structured HTML-like layout.

```javascript
function Card() {
  return (
    <div className="card">
      <img className="card-img" src="https://github.com/sans-script.png" alt="profile picture" />
      <h2 className="card-title">Alex Santos</h2>
      <p className="card-text">I'm a Front-End Web Developer learning React</p>
    </div>
  );
}

export default Card;
```

- **Function Definition**: The `Card` function returns a `div` element with the class `card`, containing an image (`<img>`), a heading (`<h2>`), and a paragraph (`<p>`).
- **Image**: The image element includes a `src` attribute pointing to a URL and an `alt` attribute for accessibility.
- **Title and Description**: The heading and paragraph elements provide the title and description of the card.
- **Export**: The `Card` component is exported as the default export of the module.
