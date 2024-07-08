# Introduction to React

## Project Overview

This project demonstrates the basic structure and components of a React application. It includes a main application component (`App.jsx`), along with several other components (`Header.jsx`, `Footer.jsx`, `Food.jsx`) that collectively form the user interface. Additionally, the project incorporates a CSS file (`index.css`) for styling and a main entry point (`main.jsx`) to render the application.

### [App.jsx](./src/App.jsx)

The `App.jsx` file serves as the main component of the application. It imports and utilizes the `Header`, `Footer`, and `Food` components to construct the structure of the webpage.

```javascript
import Food from "./Food";
import Footer from "./Footer";
import Header from "./Header";

function App() {
  return (
    <>
      <Header />
      <Footer />
      <Food />
    </>
  );
}

export default App;
```

- **Imports**: The `App` component imports `Header`, `Footer`, and `Food` components.
- **Function Definition**: The `App` function returns a JSX fragment containing the `Header`, `Footer`, and `Food` components.
- **Export**: The `App` component is exported as the default export of the module.

### [Food.jsx](./src/Food.jsx)

The `Food.jsx` file defines a `Food` component that displays a list of food items. It demonstrates the use of JavaScript expressions within JSX.

```javascript
function Food(){

    const food1 = 'Orange';
    const food2 = 'Banana';

    return(
        <ul>
            <li>Apple</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    );
}
export default Food;
```

- **Function Definition**: The `Food` function defines two constants, `food1` and `food2`.
- **JSX Return**: The function returns an unordered list (`<ul>`) containing list items (`<li>`). The list items include static text (`Apple`) and dynamic content (`food1` and `food2.toUpperCase()`).
- **Export**: The `Food` component is exported as the default export of the module.

### [Footer.jsx](./src/Footer.jsx)

The `Footer.jsx` file defines a `Footer` component that displays a footer section with the current year. It demonstrates the use of JavaScript within JSX to dynamically display the current year.

```javascript
function Footer(){
    return(
        <footer>
            <p>&copy; {new Date().getFullYear()} Your Website Name</p>
        </footer>
    );
}
export default Footer;
```

- **Function Definition**: The `Footer` function returns a footer element (`<footer>`) containing a paragraph (`<p>`).
- **Dynamic Content**: The paragraph includes the current year, dynamically generated using `new Date().getFullYear()`.
- **Export**: The `Footer` component is exported as the default export of the module.

### [Header.jsx](./src/Header.jsx)

The `Header.jsx` file defines a `Header` component that displays a header section with a navigation menu. It demonstrates the use of JSX to create a structured HTML-like layout.

```javascript
function Header(){

    return(
        <header>
            <h1>My Website</h1>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            <hr />
        </header>
    );

}
export default Header;
```

- **Function Definition**: The `Header` function returns a header element (`<header>`) containing a heading (`<h1>`), a navigation element (`<nav>`), and a horizontal rule (`<hr>`).
- **Navigation Menu**: The navigation element includes an unordered list (`<ul>`) with list items (`<li>`) and anchor tags (`<a>`) for navigation links.
- **Export**: The `Header` component is exported as the default export of the module.

### [index.css](./src/index.css)

The `index.css` file contains the CSS styles for the application. It is imported into the `main.jsx` file to apply the styles globally.

### [main.jsx](./src/main.jsx)

The `main.jsx` file is the entry point of the React application. It uses `ReactDOM` to render the `App` component into the root DOM element. It also imports the global CSS styles from `index.css`.

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
```

- **Imports**: The `main.jsx` file imports React, ReactDOM, the `App` component, and the global CSS styles.
- **Rendering**: The `ReactDOM.createRoot` method is used to render the `App` component into the DOM element with the id `root`. The application is wrapped in `React.StrictMode` to highlight potential problems in the application.