// useEffect() = React Hook that tells React DO SOME CODE WHEN (pick one):
//               This component re-renders
//               This component mounts
//               The state of a value

// useEffect(function, [dependencies])

// 1. useEffect(() => {})            // Runs after every re-render                                                                   // Runs after every re-render
// 2. useEffect(() => {}, [])        // Runs only on mount                                                                 // Runs only on mount
// 3. useEffect(() => {}, [value])   // Runs on mount + value changes

// USES
// #1 Event Listeners
// #2 DOM manipulation
// #3 Subscriptions (real-time updates)
// #4 Fetching Data from an API
// #5 Clean up when a component unmounts (unmounts => removes a component)

import React, { useState } from "react";

function MyComponent() {
 
  return (<></>)
}

export default MyComponent;
