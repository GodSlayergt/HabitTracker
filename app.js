//----------- Importing Modules -----------//
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const session = require('express-session');

const app = express();

//------Connect to Mongo--------//
mongoose.connect("mongodb+srv://gtiwari037:DTJizkPfPqAYqe74@cluster0.8c0r8xj.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB successfully!"))
    .catch(err => console.log(err));

//-----EJS---------//
app.use(expressLayouts);
app.use("/assets", express.static('./assets'));
app.set('view engine', 'ejs');

//------BodyParser--------//
app.use(express.urlencoded({ extended: false }));

//---------Express Session----------//
app.use(
    session({
        secret: 'secret',
        resave: true,
        saveUninitialized: true
    })
);


//-----Routes---------//
app.use('/', require('./routes/index'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server started on port  ${PORT}`));

