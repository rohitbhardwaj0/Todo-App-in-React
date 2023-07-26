const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');

const app = express();
//use express.json() get data into json format
app.use(express.json());
//port
const PORT = process.env.PORT || 5500;
app.use(cors());

//import routes
const  TodoItemRoute = require('./Routes/todoItems');

//lets connect mongodb
mongoose.connect(process.env.DB_CONNECT)
.then(()=> console.log("Database connected"))
.catch(err => console.log(err))


app.use('/', TodoItemRoute);


//add port and connect to server
app.listen(PORT, ()=>console.log("Server connected"));