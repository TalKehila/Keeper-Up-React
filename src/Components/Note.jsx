import React from "react";


const Note = (props) => {

   function SubmitDelete(event) {
     props.del(props.note);
     event.preventDefault();
   }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={SubmitDelete}> delete note</button>
    </div>
  );
};

export default Note;
