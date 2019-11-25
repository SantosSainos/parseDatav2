// Requires
import express from 'express';
import bodyParser from 'body-parser';

// Initialize variables
var app = express();

// Body Parser
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());


// Import Routes
var parserRoutes = require('./routes/parser');


// Routes (Middlware)
app.use('/parser', parserRoutes);

// Listen to Request
app.listen(3000, () => {
    console.log('Express server - port 3000: \x1b[32m%s\x1b[0m', 'online');
});