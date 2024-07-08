## Rendering Lists in React

### Project Overview

This project demonstrates how to render lists in React by utilizing a main application component (`App.jsx`) that passes arrays of objects as props to a `List` component. The `List` component dynamically renders the items based on the received props and showcases the use of PropTypes for prop type validation and default props.

### [App.jsx](./src/App.jsx)

The `App.jsx` file serves as the main component of the application. It defines arrays of fruit and vegetable objects and conditionally renders the `List` component for each category.

```javascript
import List from "./List";

function App() {
  const fruits = [
    { id: 1, name: "apple", cal: 95 },
    { id: 2, name: "orange", cal: 45 },
    { id: 3, name: "banana", cal: 105 },
    { id: 4, name: "coconut", cal: 159 },
    { id: 5, name: "pineapple", cal: 37 },
  ];

  const vegetables = [
    { id: 6, name: "potatoes", cal: 110 },
    { id: 7, name: "celery", cal: 15 },
    { id: 8, name: "carrots", cal: 25 },
    { id: 9, name: "corn", cal: 63 },
    { id: 10, name: "broccoli", cal: 50 },
  ];

  return (
    <>
      {fruits.length > 0 && <List items={fruits} category="Fruits" />}
      {vegetables.length > 0 && <List items={vegetables} category="Vegetables" />}
    </>
  );
}

export default App;
```

- **Imports**: The `App` component imports the `List` component.
- **Data Arrays**: Defines arrays of `fruits` and `vegetables`, each containing objects with `id`, `name`, and `cal` properties.
- **Conditional Rendering**: Renders the `List` component for each category only if the corresponding array has items.

### Understanding Rendering Lists in React

Rendering lists in React involves iterating over an array of data and generating a list of elements dynamically. Each item in the array should have a unique key to help React identify which items have changed, are added, or are removed.

#### Key Points About Rendering Lists:
- **Unique Keys**: Each list item should have a unique key to ensure efficient updates.
- **Map Function**: Use the `map` function to transform an array into a list of elements.
- **Conditional Rendering**: Render components or elements conditionally based on the length or content of the array.

##### Example:
```javascript
const listItems = itemList.map((item) => (
  <li key={item.id}>
    {item.name}: &nbsp;
    <b>{item.cal}</b>
  </li>
));
```
In this example, the `map` function is used to iterate over `itemList` and create a list item (`<li>`) for each element in the array.

### [List.jsx](./src/List.jsx)

The `List.jsx` file defines a `List` component that renders an ordered list of items based on the `items` and `category` props.

```javascript
import PropTypes from "prop-types";

function List(props) {
  const itemList = props.items;
  const category = props.category;

  // fruits.sort((a, b) => a.name.localeCompare(b.name)) // Alphabetical
  // fruits.sort((a, b) => b.name.localeCompare(a.name)) // Reverse Alphabetical
  // fruits.sort((a, b) => a.cal - b.cal) // Numerical Order
  // fruits.sort((a, b) => b.cal - a.cal) // Numerical Order

  // const lowCalFruits = fruits.filter(fruit => fruit.cal  < 100);
  // const highCalFruits = fruits.filter(fruit => fruit.cal  >= 100);

  const listItems = itemList.map((item) => (
    <li key={item.id}>
      {item.name}: &nbsp;
      <b>{item.cal}</b>
    </li>
  ));

  return (
    <>
      <h3 className="list-category">{category}</h3>
      <ol className="list-items">{listItems}</ol>
    </>
  );
}

List.propTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      cal: PropTypes.number,
    })
  ),
};

List.defaultProps = {
  category: "Category",
  items: [],
};

export default List;
```

- **Imports**: The `List` component imports `PropTypes` for prop type validation.
- **Props**: The component receives `items` and `category` as props.
- **Item List**: Maps over `itemList` to create a list of items.
- **Rendering**: Renders the category name as a heading and the list of items in an ordered list.
- **Prop Types**: Specifies the expected data types for `category` and `items` using `PropTypes`.
- **Default Props**: Sets default values for `category` and `items` in case they are not provided.

### Explanation of Each Code Section

#### App.jsx

1. **Imports**: `List` is imported to be used within the `App` component.
2. **Data Arrays**: Defines arrays of `fruits` and `vegetables`, each containing objects with properties: `id`, `name`, and `cal`.
3. **Function Definition**: `App` function returns JSX.
4. **Conditional Rendering**: Uses logical AND (`&&`) to render the `List` component only if the arrays `fruits` and `vegetables` have items.

#### List.jsx

1. **Imports**: `PropTypes` is imported for prop type validation.
2. **Props**: `List` component receives `items` and `category` as props.
3. **Map Function**: Iterates over `itemList` to create list items with unique keys.
4. **Rendering**: Renders the category name and an ordered list of items.
5. **Prop Types**: Defines the expected types for `category` and `items`.
6. **Default Props**: Provides default values for `category` and `items`.

### Conclusion

This project demonstrates how to render lists in React by passing arrays of objects as props to a `List` component. The `List` component dynamically renders the items based on the received props and uses PropTypes for type-checking and setting default values.

- **Rendering Lists**: Efficiently display lists of items using the `map` function.
- **Unique Keys**: Ensure each list item has a unique key for optimal performance.
- **PropTypes**: Validate the types of props to enhance code reliability.
- **Default Props**: Provide fallback values for props to ensure components have default behavior if certain props are missing.