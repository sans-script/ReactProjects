import { useState } from 'react';

function Button() {
  const [text, setText] = useState("Hi"); // Estado para gerenciar o texto

  const handleClick = () => setText("OUCH!");
  const handleClick2 = (name) => setText(`${name} stop clicking me!`);
  
  const [count, setCount] = useState(0);

  const handleClick3 = (name) => {
    if (count < 3) {
      setCount(count + 1);
      setText(`${name} you clicked me ${count + 1} time/s`);
    } else {
      setText(`${name} stop clicking me!`);
    }
  };

  const handleClick4 = (e) => (e.target.textContent = "OUCH 🤕");

  const styles = {
    button: {
      backgroundColor: "hsl(200, 100%, 50%)",
      color: "white",
      width: "100px",
      height: "20px",
      border: "none",
      borderRadius: "2px",
      cursor: "pointer",
    },
    div: {
      width: "100%",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
      gap: "5px",
      marginTop: "5px",
      fontFamily: "'Arial', sans-serif",
      fontSize: "12px",
      fontWeight: "bold",
    },
  };

  return (
    <>
      <div style={styles.div}>{text}</div>
      <button style={styles.button} onClick={handleClick}>Click Me</button>
      <button style={styles.button} onClick={() => handleClick2("Alex")}>Click Me</button>
      <button style={styles.button} onClick={() => handleClick3("Alex")}>Click Me</button>
      <button style={styles.button} onClick={(e) => handleClick4(e)}>Click Me</button>
      <button style={styles.button} onDoubleClick={(e) => handleClick4(e)}>Double Click</button>
    </>
  );
}

export default Button;
