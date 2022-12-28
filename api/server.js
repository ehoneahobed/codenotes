const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const noteRoute = require("./routes/notes");

dotenv.config();

mongoose.set('strictQuery', true);
mongoose
	.connect(process.env.DB_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(console.log("connected to database successfully"))
	.catch((error) => console.log(error));

app.use(express.json());
app.use("/api/notes", noteRoute);

const port = process.env.PORT || 5000;
app.listen(port, () => {
	console.log(`The server is up and running on port ${port}`);
});
