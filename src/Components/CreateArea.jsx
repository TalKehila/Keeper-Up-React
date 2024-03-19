import React, { useState } from "react";

const CreateArea = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { value, name } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }



  function SubmitNote(event) 
  {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }
  return (
    <div className="addnote">
      <form>
        <input 
          name="title"
          type="text"
          placeholder="title"
          onChange={handleChange}
          value={note.title}
        />
        <textarea
          name="content"
          type="text"
          placeholder="note here"
          onChange={handleChange}
          value={note.content}
        />
        <button  onClick={SubmitNote}>add note</button>
      </form>
    </div>
    
  );
};

export default CreateArea;
