const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

// show all doctors
router.get('/', ctrl.doctor.allDoctors)

// create doctor (for testing)
router.post('/', ctrl.doctor.createDoctor)

module.exports = router;