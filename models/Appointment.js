const mongoose = require('mongoose');
Schema = mongoose.Schema;

const AppointmentSchema = new Schema({
    patientFirstName: String,
    patientLastName: String,
    date: String,
    time: String,
    kind: String,
    doctorID: String,
});

const Appointment = mongoose.model('Appointment', AppointmentSchema);

module.exports = Appointment;