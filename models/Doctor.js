const mongoose = require('mongoose');
Schema = mongoose.Schema;

const DoctorSchema = new Schema({
    firstName: String,
    lastName: String,
});

const Doctor = mongoose.model('Doctor', DoctorSchema);

module.exports = Doctor;