import React from "react";
// {
//   key: 1,
//   title: "Delegation",
//   content:
//     "Q. How many programmers does it take to change a light bulb? A. None – It’s a hardware problem"
// },

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  );
}

export default Note;
