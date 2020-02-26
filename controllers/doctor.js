const db = require('../models');

// Get a list of all doctors
const allDoctors = (req, res) => {
    db.Doctor.find((err, doctors) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        }
        res.json(doctors);
    })
}

// Create doctor (for testing purpose)
const createDoctor = (req, res) => {
    db.Doctor.create(req.body, (err, doctorCreated) => {
        if (err) return (console.log(err));
        res.status(201).json({
            status: 201,
            count: 1,
            data: doctorCreated,
            dateCreated: new Date().toLocaleString(),
        })
    })
}

module.exports = {
    allDoctors,
    createDoctor,

}