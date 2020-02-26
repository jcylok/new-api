//SETTING
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT  = process.env.PORT || 3000  // Assuming everything is run on localhost, didn't add a env file for the app
const routes = require('./routes');

//CORS
const corsOptions = {
    origin: ['*'],
    credentials: true,
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

//BODY PARSER
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//ROUTES
app.use('/api/v1/doctor', routes.doctor);
app.use('/api/v1/appointment', routes.appointment)

//START SERVER
app.listen(PORT, () => console.log(`Server connected at ${PORT}`) )