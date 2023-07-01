const express = require("express");
const mongoose = require("mongoose");

const cors = require("cors");
const connectDB = require("./db");

const app = express();
//use express.json() to get data into json format
app.use(express.json());
//Port
const PORT = process.env.PORT || 5050;

//use cors
app.use(cors());

//import routes
const TodoItemRoute = require("./routes/todoItems");

//connect to mongodb ..
connectDB();

app.use("/", TodoItemRoute);

//connect to server
app.listen(PORT, () => console.log(`Server connected ${PORT}`));
