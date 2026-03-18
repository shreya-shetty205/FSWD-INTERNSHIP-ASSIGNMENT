const express = require('express');
const router = express.Router();

const {
    getAllStudents,
    getStudentById,
    addStudent
} = require('../controllers/studentController');

router.get('/students', getAllStudents);
router.get('/students/:id', getStudentById);


router.get('/add', addStudent);

module.exports = router;