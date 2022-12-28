import React, { useEffect, useState, useRef } from "react";
import "./notedetails.css";
import { useLocation } from "react-router-dom";
import axios from "axios"; 

function NoteDetails() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const [note, setNote] = useState({});
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const fetchNote = async () => {
      const res = await axios.get("/notes/"+ path);
      setNote(res.data);
      setTitle(res.data.title);
      setDetail(res.data.detail);
    }
    fetchNote();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete("/notes/"+ path);
      window.location.replace("/");
    } catch (error) {
      console.log(error)
    }

  }

  const textareaRef = useRef(null);

  useEffect(() => {
    if (updateMode){
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }

  }, [updateMode, detail]);
  
  const handleUpdate = async () => {
    try {
      await axios.put(`/notes/${note._id}`, {
          title,
          detail,
          updatedAt: new Date(),

      });
      // window.location.reload();
    } catch (error) {
      console.log(error)
    }

  }

  // const handleChange = async (event) => {
  //   setDetail(event.target.value);
  //   await handleUpdate();
  // }

  return (
    <div>
      {
        updateMode ? (<div className="AddNote__form-title">
        <input name="title" className="edit-detail" value={title} onChange={async (e) => {setTitle(e.target.value); await handleUpdate()}} placeholder="Title of note goes here" required  />
      </div>) : (<h2 className="NoteDetails__title">{title}</h2>
      
      
      )
      }
      
      <section className="NoteDetails__content">
        <div className="NoteDetails__content-top">
          <div className="NoteDetails__content-timestamps">
            <p>
              <span>Created At:</span> {new Date(note.createdAt).toDateString()}
            </p>
            <p>
              <span>Last Updated At:</span> {new Date(note.createdAt).toDateString()}
            </p>
            {/* <p>
              <span>Created By: </span>
                <Link to={`/?user=${note.username}`} className="link">
                  {note.username}
                </Link>
            </p> */}
          </div>
          {
            updateMode ? (<div className="NoteDetails__button">
            <button className="NoteDetails__button-edit" onClick={ async () => {
              await handleUpdate();
              setUpdateMode(false);
              window.location.reload();
            }
          
          }>View Note</button>
            <button className="NoteDetails__button-delete" onClick={handleDelete}>Delete Note</button>
          </div>) : (
              <div className="NoteDetails__button">
            <button className="NoteDetails__button-edit" onClick={() => setUpdateMode(true)}>Edit Note</button>
            <button className="NoteDetails__button-delete" onClick={handleDelete}>Delete Note</button>
          </div>
            )
          }
        </div>
        {
          updateMode ? (<div className="AddNote__form-body">
          {/* <input
            name="body"
            placeholder="Write your detailed note here"
            required
          /> */}
          <textarea
            id="textarea"
            ref={textareaRef}
            name="body"
            className="edit-detail"
            placeholder="Write your detailed note here"
            required
            value={detail}
            autoFocus
            // onChange={handleChange}
            onChange={async (event) => {setDetail(event.target.value); }}
          ></textarea> 
          {/* <button className="AddNote__form-btn" onClick={handleUpdate}>Update Note</button> */}
        </div> ) : <div className="NoteDetails__content-body">
          {detail}
        </div>
        }
        
      </section>
    </div>
  );
}

export default NoteDetails;
