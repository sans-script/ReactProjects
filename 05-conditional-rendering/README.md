## Conditional Rendering in React

### Project Overview

This project demonstrates the concept of conditional rendering in React. It includes a main application component (`App.jsx`) that renders a `UserGreeting` component. The `UserGreeting` component conditionally renders a welcome message or a login prompt based on whether the user is logged in or not. It also showcases the use of PropTypes for type-checking props and setting default prop values.

### [App.jsx](./src/App.jsx)

The `App.jsx` file serves as the main component of the application. It imports the `UserGreeting` component and renders it with specific props.

```javascript
import UserGreeting from './UserGreeting.jsx';

function App() {
  return (
    <>
      <UserGreeting isLoggedIn={true} username="Alex Sans" />
    </>
  );
}

export default App;
```

- **Imports**: The `App` component imports the `UserGreeting` component.
- **Component Instance**: It renders the `UserGreeting` component with the props `isLoggedIn` set to `true` and `username` set to `"Alex Sans"`.

### Understanding Conditional Rendering

Conditional rendering allows you to control what gets rendered in your application based on certain conditions. This can be used to show, hide, or change components dynamically.

#### Key Points About Conditional Rendering:
- **Dynamic UI**: React components can render different outputs based on specific conditions.
- **User Experience**: Helps in creating a more interactive and user-friendly interface by showing relevant information.

##### Example:
```javascript
return (props.isLoggedIn ? <h2 style={StylesWelcome}>Welcome {props.username}</h2> : <h2 style={StylesLogin}>Please, log in to continue</h2>);
```
In this example, the component checks if `props.isLoggedIn` is `true`. If it is, it renders a welcome message; otherwise, it renders a login prompt.

### [UserGreeting.jsx](./src/UserGreeting.jsx)

The `UserGreeting.jsx` file defines a `UserGreeting` component that conditionally renders a greeting message based on the `isLoggedIn` prop.

```javascript
/* eslint-disable react/prop-types */ 
// That line above me disables props validation

import PropTypes from 'prop-types';

function UserGreeting(props) {
  const StylesWelcome = {
    backgroundColor: "#0f0",
    padding: "20px",
    fontFamily: "Arial, sans-serif"
  };

  const StylesLogin = {
    backgroundColor: "#f00",
    padding: "20px",
    fontFamily: "Arial, sans-serif"
  };

  // Conditional rendering using ternary operator
  return (props.isLoggedIn ? <h2 style={StylesWelcome}>Welcome {props.username}</h2> : <h2 style={StylesLogin}>Please, log in to continue</h2>);
}

UserGreeting.propTypes = {
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string,
};

UserGreeting.defaultProps = {
  isLoggedIn: false,
  username: "Guest",
};

export default UserGreeting;
```

- **Imports**: The `UserGreeting` component imports `PropTypes` for prop type validation.
- **Inline Styles**: Defines two style objects, `StylesWelcome` and `StylesLogin`, for different states of the component.
- **Conditional Rendering**: Uses a ternary operator to conditionally render the welcome message or the login prompt based on `props.isLoggedIn`.
- **Prop Types**: Specifies the expected data types for `isLoggedIn` and `username` props.
- **Default Props**: Sets default values for `isLoggedIn` and `username` props.

### Explanation of Each Code Section

#### App.jsx

1. **Imports**: `UserGreeting` is imported to be used within the `App` component.
2. **Function Definition**: `App` function returns JSX.
3. **Component Rendering**: `UserGreeting` is rendered with `isLoggedIn` set to `true` and `username` set to `"Alex Sans"`.

#### UserGreeting.jsx

1. **Imports**: `PropTypes` is imported for prop type validation.
2. **StylesWelcome and StylesLogin**: These objects define inline styles for the welcome message and login prompt, respectively.
3. **Conditional Rendering**: Uses a ternary operator to decide which message to render based on `props.isLoggedIn`.
4. **Prop Types**: Defines the expected types for `isLoggedIn` and `username` using `PropTypes`.
5. **Default Props**: Sets default values for `isLoggedIn` and `username` in case they are not provided.

### Conclusion

This project demonstrates the use of conditional rendering in React to dynamically show content based on the state of the application. It also illustrates the use of PropTypes for type-checking props and setting default values. The `App` component renders a `UserGreeting` component that conditionally displays a welcome message or a login prompt based on the `isLoggedIn` prop.

- **Conditional Rendering**: Enables dynamic UI updates based on conditions.
- **PropTypes**: Ensures props are of the correct data type, enhancing type safety.
- **Default Props**: Provides fallback values for props, ensuring components have default behavior if certain props are missing.