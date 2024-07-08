// useContext() = React Hook that allows you to share values
//                between multiples levels of components
//                without passing props through each level

// PROVIDER COMPONENT
// 1. import {createContext} from 'react';
// 2. export const MyContext = createContext();
// 3. <MyContext.Provider value={value}>
//       <Child />
// <MyContext.Provider />

// CONSUMER COMPONENTS
// 1. import React, {userContext} from 'react
//    import { MyContext } from 'ComponentA';
// 2. const values = userContext.(MyContext);
//
//

import React from "react";
import ComponentA from "./ComponentA.jsx";

function App() {
  return (
    <>
      <ComponentA />
    </>
  );
}
export default App;
