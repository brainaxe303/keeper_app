import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

//   key: 1,
//   title: "Delegation",
//   content:
//     "Q. How many programmers does it take to change a light bulb? A. None – It’s a hardware problem"
// },
function showNotes(notee) {
  return <Note key={notee.key} title={notee.title} content={notee.content} />;
}

function App() {
  return (
    <div>
      <Header />
      {notes.map(showNotes)}

      <Footer />
    </div>
  );
}

export default App;
