import React from "react";
import { Link } from "react-router-dom";

function NoteCard({ note }) {
  return (
    <article className="notes__card">
      <Link to={`/note/${note._id}`}>
        <div className="container">
          <h3 className="notes__card-title">{note.title}</h3>
        </div>
        <div className="container">
          <p className="notes__card-detail">{note.detail}</p>
        </div>
        <hr />
        <div className="container">
          <p className="notes__card-date">
            Last Updated At:{" "}
            <span>{new Date(note.updatedAt).toDateString()}</span>
          </p>
          {/* <p className="notes__card-date">By: <span>{note.username}</span></p> */}
        </div>
      </Link>
    </article>
  );
}

export default NoteCard;
