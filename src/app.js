const express = require('express');
const studentRoutes = require('./routes/student.routes');
const authRoutes = require('./routes/auth.routes');

const app = express();
app.use(express.json());

app.use('/api/students', studentRoutes);
app.use('/api/auth', authRoutes);

app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

module.exports = app;
