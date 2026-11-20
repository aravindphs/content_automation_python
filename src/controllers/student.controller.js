const Student = require('../models/student.model');

exports.createStudent = async (req, res) => {
    try{
    const { name, email, age, course } = req.body;
    const student = await Student.create({ name, email, age, course });
    res.status(201).json({ message: 'Student created successfully', data: student });

    } catch(error){
        if(error.name==='SequelizeUniqueConstraintError'){
            return res.status(409).json({message: 'A studentb with this email already exists'})
        }
        res.status(500).json({message:' Server error', error:error.message})
    }
}

exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.findAll();
    res.status(200).json({ count: students.length, data: students });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};


exports.getStudentById = async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.id);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.status(200).json({ data: student });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};


exports.updateStudent = async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.id);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    const { name, email, age, course } = req.body;
    await student.update({ name, email, age, course });
    res.status(200).json({ message: 'Student updated successfully', data: student });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.deleteStudent = async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.id);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    await student.destroy();
    res.status(200).json({ message: 'Student deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
