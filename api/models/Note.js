const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
		unique: true,
	},
	detail: {
		type: String,
		required: true,
	},
	categories: {
		type: Array,
		required: false,
	},
	username: {
		type: String,
		required: false,
	}
}, {timestamps: true});

module.exports = mongoose.model("Note", NoteSchema);
