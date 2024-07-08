// props = read-only properties that are shared between components.
//         A parent component can send data to a child component.
//         <component key=value />

// propsTypes = A mechanism that ensures that the passed value is.
//            of the correct datatype.
//            age = PropTypes.number


// defaultProps = Default values for props in case they are not passed.
//                from the parent component.
//                name: "Guest"


import Student from "./Student"
import PropTypes from "prop-types"

function App() {
  

  return (
    <>
      <Student name="SpongeBob" age={30} isStudent={true} />
      <Student name="Patrick" age={42} isStudent={false} />
      <Student name="Squidward" age={50} isStudent={false} />
      <Student name="Sandy" age={27} isStudent={true} />
      <Student />
    </>
  )
}

Student.defaultProps = {
  name: "Guest",
  age: "0",
  isStudent: "false"
}

Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool
}
export default App
