import React from "react";
import axios from "axios";
import "./notes.css";
import { useEffect, useState } from "react";
import NoteCard from "./NoteCard";
import { useLocation } from "react-router-dom";

function Notes() {
  const [notes, setNotes] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchNotes = async () => {
      const res = await axios.get("/notes" + search);
      // console.log(res.data);
      setNotes(res.data);
    };
    fetchNotes();
  }, [search]);

  return (
    <div className="notes">
      <h2 className="notes__title">All Notes</h2>
      <section className="notes__display">
        {notes.map((note) => (
          <NoteCard note={note} />
        ))}
      </section>
    </div>
  );
}

export default Notes;
