const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

// create a new appointment for a doctor
router.post('/:doctorID', ctrl.appointment.createAppointment)

// get a list of all appointment for a particular doctor
router.get('/:doctorID', ctrl.appointment.showDoctorAppointment)

// get a list of all appointment for a particular date
router.get('/:date', ctrl.appointment.showDateAppointment)

// delete an existing appointment for a doctor
router.delete('/:appointmentID', ctrl.appointment.deleteAppointment) 
        // each appointment has a unique ID across the system.
        // The params are available on frontend after making GET request on each doctor's calender page.

module.exports = router;