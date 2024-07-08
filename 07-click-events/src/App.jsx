// click event = An interaction when a user clicks on a specific element.
//               We can respond to clicks by passing
//               a callback to the onClick event handler.

import Button from "./Button.jsx";
import ProfilePicture from "./Pfp.jsx";

const styles = {
  width: "100%",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  gap: "5px",
  marginTop: '5px',
  p: {
    fontFamily: "'Arial', sans-serif",
    fontSize: '12px',
    fontWeight: 'bold',
  }
};

function App() {
  return (
    <>

      <div style={styles}>
        <Button />
      </div>
      <div style={styles}>
        <ProfilePicture />
      </div>
    </>
  );
}

export default App;
