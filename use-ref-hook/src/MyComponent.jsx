// useState() = Re-renders the component when the state value changes.

// useRef() = "use References" Does not cause re-renders when its value changes.
//             When you want a component to "remember" some information,
//             but you want don't want that information to trigger new renders.

//             1. Accessing/Interacting with DOM elements
//             2. Handling Focus, Animations, and Transitions
//             3. Managing Timers and Intervals

import React, { useState, useEffect, useRef } from "react";

function MyComponent() {
  //   let [number, setNumber] = useState(0);

  const InputRef1 = useRef(null);
  const InputRef2 = useRef(null);
  const InputRef3 = useRef(null);

  useEffect(() => {
    console.log("COMPONENT RENDERED");
    console.log(InputRef1);
  });

  function handleClick1() {
    // setNumber((n) => n + 1);
    // InputRef1.current++;
    InputRef1.current.focus()
    InputRef1.current.style.backgroundColor = "yellow"
    InputRef2.current.style.backgroundColor = ""
    InputRef3.current.style.backgroundColor = ""
  }


  function handleClick2() {
    // setNumber((n) => n + 1);
    // InputRef1.current++;
    InputRef2.current.focus()
    InputRef1.current.style.backgroundColor = ""
    InputRef2.current.style.backgroundColor = "yellow"
    InputRef3.current.style.backgroundColor = ""
  }


  function handleClick3() {
    // setNumber((n) => n + 1);
    // InputRef1.current++;
    InputRef3.current.focus()
    InputRef1.current.style.backgroundColor = ""
    InputRef2.current.style.backgroundColor = ""
    InputRef3.current.style.backgroundColor = "yellow"
  }



  return (
    <>
      <div>
        <button onClick={handleClick1}>Click Me</button>
        <input ref={InputRef1} type="text" />

        <button onClick={handleClick2}>Click Me</button>
        <input ref={InputRef2} type="text" />

        <button onClick={handleClick3}>Click Me</button>
        <input ref={InputRef3} type="text" />

      </div>
    </>
  );
}
export default MyComponent;
