const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const userRouter = require('./routes/user.routes');
const taskRouter = require("./routes/task.routes");



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan('dev'));


app.get('/', function (req, res) {
    res.send("hello from / route")
})

app.use('/user', userRouter);
app.use('/task', taskRouter);

module.exports = app;
