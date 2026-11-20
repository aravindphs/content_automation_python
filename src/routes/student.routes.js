const express = require('express');
const router = express.Router();

const controller = require('../controllers/student.controller');
const auth = require('../middleware/auth.middleware');
const validate = require('../middleware/validate.middleware');
const {studentRules} = require('../validators/student.validator')

router.post('/', auth, studentRules, validate, controller.createStudent);
router.get('/', auth, controller.getAllStudents);
router.get('/:id', auth, controller.getStudentById);
router.put('/:id', auth, studentRules, validate, controller.updateStudent);
router.delete('/:id', auth, controller.deleteStudent);

module.exports = router;
