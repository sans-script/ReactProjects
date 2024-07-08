// React hook = A special function that allows functional components
//              to use React features without writing class components (React v16.8).
//              Examples of React hooks: useState(), useEffect(), useContext(), useReducer(), useCallback() and more...

// useState() = A React hook that allows the creation of a stateful variable
//              AND a setter function to update its value in the Virtual DOM.
//              [name, setName]

import MyComponent from "./MyComponent.jsx";
import Counter from "./Counter.jsx";

function App() {
  return (
    <>
      <MyComponent />
      <Counter />
    </>
  );
}
export default App;
