import React from "react";
import "./addnote.css";
import { useRef, useEffect, useState } from "react";
import axios from "axios"

function AddNote(props) {
  const [detail, setDetail] = useState();
  const textareaRef = useRef(null);

  const [title, setTitle] = useState("");


  useEffect(() => {
    textareaRef.current.style.height = "auto";
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
  }, [detail]);


  const handSubmit = async (e) => {
    e.preventDefault();
    const newNote = {
      username: "member",
      title,
      detail
    }
    try {
      const res = await axios.post("/notes", newNote);
      window.location.replace("/note/"+ res.data._id);    
    } catch (error) {
      
    }

  }

  return (
    <div className={`${props.classname}`}>
      <form className="AddNote__form" onSubmit={handSubmit}>
        <div className="AddNote__form-title">
          <input name="title" onChange={(e) => setTitle(e.target.value)} placeholder="Title of note goes here" required  autoFocus />
        </div>
        <div className="AddNote__form-body">
          <textarea
            id="textarea"
            ref={textareaRef}
            name="body"
            placeholder="Write your detailed note here"
            required
            onChange={(event) => setDetail(event.target.value)}
          ></textarea>
        </div>
        <button className="AddNote__form-btn" type="submit">Save Note</button>
      </form>
    </div>
  );
}

export default AddNote;
