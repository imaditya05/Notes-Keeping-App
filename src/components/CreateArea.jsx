import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function changeHandler(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitHandler(event) {
    props.addNote(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        <input
          name="title"
          onChange={changeHandler}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={changeHandler}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitHandler}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
