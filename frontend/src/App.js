import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Header from "./Components/header/Header";
import Notes from "./Components/notes/Notes";
import AddNote from "./Components/addnote/AddNote";
import NoteDetails from "./Components/notedetails/NoteDetails";


import "./App.css";

export const URL = process.env.REACT_APP_API_URL;
// console.log(URL);

function App() {
	return (
		<Router className="App">
			<Header />
			<section className="App__notes">
				<Routes>
					<Route path="/" element= {<Notes />} />
					<Route path="/addnote" element= {<AddNote />} />
					<Route path="/note/:noteId" element= {<NoteDetails />} />
				</Routes>
			</section>
		</Router>
	);
}

export default App;
