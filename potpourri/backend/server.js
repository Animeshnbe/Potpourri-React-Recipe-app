const express = require('express');
const app = express();
//const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

const prodRouter = require('./routes/products');
app.use('/company', prodRouter);

app.listen(port, () => {
    console.log(`Server is running on Port:  + ${ port }`);
});

const uri = "mongodb+srv://Overwatch12:marvellous@cluster0.zrmqh.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})