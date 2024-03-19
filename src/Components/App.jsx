import React, { useState } from "react";
import Note from "./Note";
import CreateArea from "./CreateArea";
import Footer from "./Footer";
import Title from "./Title";
//import notes from "../Notes";

const App = () => {
  const [arrNote, setArrNote] = useState([]);

  function AddNote(newNote) {
    setArrNote((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }
function delNote(index) {
  setArrNote((prevNotes) => {
    const updatedNotes = prevNotes.filter((_, i) => i !== index);
    return updatedNotes;
  });
}
  
  return (
    <div>
      <Title />
      <CreateArea onAdd={AddNote} />
      {arrNote.map((newNote) => {
        return (
          <Note
            key={newNote.key}
            title={newNote.title}
            content={newNote.content}
            del={() => delNote(arrNote.indexOf(newNote))}
          />
        );
      })}
      <Footer />
    </div>
  );
};

export default App;

