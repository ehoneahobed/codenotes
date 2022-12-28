const router = require("express").Router();
const { json } = require("express");
const Note = require("../models/Note");

// Create a new note
router.post("/", async (req, res) => {
  const newNote = new Note(req.body);

  try {
    const savedNote = await newNote.save();
    res.status(200).json(savedNote);
  } catch (error) {
    res.status(500).json(error);
  }
});

// update post
router.put("/:id", async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);

    try {
      const updatedNote = await Note.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );

      res.status(200).json(updatedNote);
    } catch (error) {
      res.status(500).json(error);
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

// select one note
router.get("/:id", async (req, res) => {
  try {
    // get the note with it's id
    const note = await Note.findById(req.params.id);
    res.status(200).json(note);
  } catch (error) {
    res.status(500).json(error);
  }
});

// select all notes
router.get("/", async (req, res) => {
  try {
    let notes = await Note.find();
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json(error);
  }
});

// delete one note
router.delete("/:id", async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);

    try {
      await note.delete();
      res.status(200).json("Note deleted");
    } catch (error) {
      res.status(500).json(error);
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
