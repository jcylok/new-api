const db = require('../models');

// create a new appointment for a particular doctor
const createAppointment = (req, res) => {
    // check for valid time
    console.log(req.body.time.substring(3,5))
    let check = req.body.time.substring(3,5);
    console.log(check)
    if (!(check == '00' | check == '15'| check == '30'| check == '45')) {
        return console.log('invaide time input');
    }
    db.Appointment.find({ _id: req.params.doctorID, date: req.body.date, time: req.body.time}, function (err, foundData) {
        if (err) return console.log(err);
        //  check for number of appointment
        if (foundData.length === 3) return console.log("no more than 3 appointments can be added with the same time")
        // after checking, create new record
        db.Appointment.create(req.body, (err, appointmentCreated) => {
            if (err) return (console.log(err));
            res.status(201).json({
                status: 201,
                count: 1,
                data: appointmentCreated,
                dateCreated: new Date().toLocaleString(),
            })
        })
    })

}

// show all appointments for a particular doctor
const showDoctorAppointment = (req, res) => {
    db.Appointment.find({ doctorID: req.params.doctorID}, function (err, foundData) {
        if (err) return console.log(err);
        res.json(foundData);
    })
 }

// show all appointments for a particular date
const showDateAppointment = (req, res) => {
    db.Appointment.find({ date: req.params.date}, function (err, foundData) {
        if (err) return console.log(err);
        res.json(foundData);
    })
 }
 
 // delete an existing appointment for a doctor
 const deleteAppointment = (req, res) => {
     db.Appointment.deleteOne(
         {_id: req.params.id},
         (err, appDeleted) => {
            if(err) { return console.log(err) }
            res.json(appDeleted);
         }
     )
 }


module.exports = {
    createAppointment,
    showDoctorAppointment,
    showDateAppointment,
    deleteAppointment
}