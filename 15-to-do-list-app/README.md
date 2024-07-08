## To-Do List

### Overview

The `ToDoList` component is a React component that allows users to manage a list of tasks. Users can add new tasks, delete existing tasks, and move tasks up or down in the list. The component leverages the `useState` hook for state management and includes basic input handling and list manipulation functions.

### [App.jsx](./src/App.jsx)

```javascript
import ToDoList from "./ToDoList.jsx";

function App() {
  return (
    <>
      <ToDoList />
    </>
  );
}
export default App;
```

- **Imports**: Imports the `ToDoList` component for rendering within the `App` component.
- **Rendering**: Renders the `ToDoList` component.

### [ToDoList.jsx](./src/ToDoList.jsx)

```javascript
import { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState(["Eat", "Take a shower", "Walk the dog"]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = 
      [updatedTasks[index - 1], updatedTasks[index]];
      setTasks(updatedTasks)
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
        const updatedTasks = [...tasks];
        [updatedTasks[index], updatedTasks[index + 1]] = 
        [updatedTasks[index + 1], updatedTasks[index]];
        setTasks(updatedTasks)
      }
  }

  return (
    <>
      <div className="to-do-list">
        <h1>To-Do List</h1>
        <div>
          <input
            type="text"
            placeholder="Enter a task..."
            value={newTask}
            onChange={handleInputChange}
          />
          <button className="add-button" onClick={addTask}>
            Add
          </button>
        </div>

        <ol>
          {tasks.map((task, index) => (
            <li key={index}>
              <span className="text"> {task} </span>
              <button
                className="delete-button"
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>
              <button className="move-button" onClick={() => moveTaskUp(index)}>
                ⬆️
              </button>
              <button
                className="move-button"
                onClick={() => moveTaskDown(index)}
              >
                ⬇️
              </button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
export default ToDoList;
```

### Explanation

#### To-Do List Component

- **State Initialization**:
  - Uses `useState` to manage the `tasks` state, initialized with an array of default tasks.
  - Uses `useState` to manage the `newTask` state for the input field, initialized to an empty string.

- **Input Handling**:
  - `handleInputChange` function:
    - Updates the `newTask` state with the value from the input field.

- **Adding a Task**:
  - `addTask` function:
    - Checks if the `newTask` is not empty or just whitespace.
    - Updates the `tasks` state by appending the new task to the existing array using the spread operator (`...`).
    - Resets the `newTask` input field to an empty string.

- **Deleting a Task**:
  - `deleteTask` function:
    - Takes an index as an argument.
    - Filters the `tasks` array to remove the item at the specified index.
    - Updates the `tasks` state with the filtered array.

- **Moving a Task Up**:
  - `moveTaskUp` function:
    - Takes an index as an argument.
    - Checks if the index is greater than 0.
    - Swaps the task at the specified index with the task above it.
    - Updates the `tasks` state with the modified array.

- **Moving a Task Down**:
  - `moveTaskDown` function:
    - Takes an index as an argument.
    - Checks if the index is less than the length of the `tasks` array minus 1.
    - Swaps the task at the specified index with the task below it.
    - Updates the `tasks` state with the modified array.

- **Rendering**:
  - **Title**: Displays "To-Do List" as the heading.
  - **Input Field**: Provides an input field for users to enter new tasks.
  - **Add Button**: Provides a button to add the new task from the input field to the list.
  - **Task List**:
    - Maps over the `tasks` array to generate a list item (`<li>`) for each task.
    - Each list item displays the task and provides buttons to delete the task and move it up or down in the list.

### Styling

#### [index.css](./src/index.css)

```css
body {
  background-color: hsl(0, 0%, 10%);
}

.to-do-list {
  font-family: Arial, sans-serif;
  text-align: center;
  margin-top: 100px;
}

h1 {
  font-size: 4rem;
  color: white;
}

button {
  font-size: 1.7rem;
  font-weight: bold;
  padding: 10px 20px;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.5s ease;
}

.add-button {
  background-color: hsl(120, 47%, 54%);
  margin-left: 10px;
}

.add-button:hover {
  background-color: hsl(120, 47%, 44%);
}

.delete-button {
  background-color: hsl(10, 90%, 50%);
}

.delete-button:hover {
  background-color: hsl(10, 90%, 40%);
}

.move-button {
  background-color: hsl(207, 90%, 64%);
}

.move-button:hover {
  background-color: hsl(207, 90%, 54%);
}

input[type="text"] {
  font-size: 1.6rem;
  padding: 10px;
  border: 2px solid hsla(0, 0%, 80%, 0.5);
  border-radius: 5px;
  color: hsla(0, 0%, 0%, 0.5);
}

ol {
  padding: 0;
}

li {
  font-size: 2rem;
  font-weight: bold;
  padding: 15px;
  background-color: hsl(207, 0%, 97%);
  margin-bottom: 10px;
  border: 3px solid hsla(0, 0%, 85%, 0.75);
  border-radius: 5px;
  display: flex;
  align-items: center;
}

.text {
  flex: 1;
}

.delete-button,
.move-button {
  padding: 8px 12px;
  font-size: 1.4rem;
  margin-left: 10px;
}
```

- **Body**: Sets the background color to a dark shade.
- **To-Do List**:
  - Centers the text and sets the top margin.
  - Uses Arial or sans-serif font.
- **Title**: Sets the font size and color for the heading.
- **Buttons**:
  - Sets font size, weight, padding, color, border, border-radius, cursor, and transition effects.
  - **Add Button**: Sets the background color and hover effect for the add button.
  - **Delete Button**: Sets the background color and hover effect for the delete button.
  - **Move Button**: Sets the background color and hover effect for the move buttons.
- **Input Field**: Sets the font size, padding, border, border-radius, and color for the input field.
- **Ordered List**:
  - Removes default padding.
- **List Items**:
  - Sets font size, weight, padding, background color, margin, border, border-radius, and flex properties.
- **Text Span**: Makes the text span flex to fill the available space.
- **Button Adjustments**: Adjusts padding, font size, and margin for the delete and move buttons within list items.