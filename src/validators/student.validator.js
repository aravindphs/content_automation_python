const {body} = require("express-validator");

exports.studentRules = [
    body('name').notEmpty() .withMessage("Name is required") .isLength({min : 2}) .withMessage("Name must be at least 2 Characters"),
    body('email')
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Email must be valid'),
  body('age')
    .optional()
    .isInt({ min: 1, max: 120 }).withMessage('Age must be a number between 1 and 120'),
  body('course')
    .optional()
    .isString().withMessage('Course must be text'),

]