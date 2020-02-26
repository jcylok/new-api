const mongoose = require('mongoose');
const DB_URL = process.env.MONGODB_URI || 'mongodb://localhost:27017/new-api';

mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
})
  .then(() => console.log(`MongoDB connected at ${DB_URL}...`))
  .catch((err) => console.log(`MongoDB connection error: ${err}`))

module.exports = {
    Doctor: require('./Doctor'),
    Appointment: require('./Appointment'),
}
