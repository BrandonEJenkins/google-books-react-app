const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

const routes = require('./routes/api');

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/google-books-react-app', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

let uri = 'mongodb://localhost/google-books-react-app';
if (process.env.NODE_ENV === 'production') {
    uri = process.env.MONGODB_URI;
    // app.use(express.static('client/build'));
}
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!');
});

// HTTP request logger
app.use(morgan('tiny'));
app.use('/api', routes);

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, console.log(`Server is starting at ${PORT}`));