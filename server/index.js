const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const Route = require("./routers/routes");

dotenv.config();
const connectDB = require("./db");
connectDB();

const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());

app.use("/api", Route);

const path = require("path");
{/*}
if (process.env.NODE_ENV === 'production') {
  //*Set static folder up in production
  app.use(express.static('client/build'));

  app.get('*', (req,res) => res.sendFile(path.resolve(__dirname, 'client', 'build','index.html')));
}
{/*}
app.use(express.static('../build'));
app.get('*', (req, res)=> {
  const index = path.join(__dirname, '/', '../build', 'index.html' );
  res.sendFile(index);
});
*/}
app.use(express.static(path.join(__dirname, "build"))); 


const port = process.env.PORT || 5100;
const server = app.listen(port, () => {
  console.log("Connected to port " + port);
});

app.use((req, res, next) => {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
