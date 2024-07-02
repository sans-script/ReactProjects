import React, { useState } from "react";

function ProfilePicture() {
  // const imageUrl = "https://github.com/sans-script.png";]
  const imageUrl = "src/assets/react.svg";

  const styles = {
    width: "40px",
    height: "40px",
    cursor: "pointer",

    p: {
      fontFamily: "'Arial', sans-serif",
      fontSize: "12px",
      fontWeight: "bold",
      width: "35px",
    },
  };
  const [text, setText] = useState("React"); // Estado para gerenciar o texto

  const handleClick = (e) => {
    setText("OUCH!")
    // console.log("OUCH!")
    e.target.style.display = "none"
  };

  return (
    <>
      <p style={styles.p}>{text}</p>
      <img onClick={(e) => handleClick(e)} style={styles} src={imageUrl}></img>
    </>
  );
}

export default ProfilePicture;
