const Student = require("../models/Student");

// Create New Student
const createStudent = async (req, res) => {

    try {

        // Create new student
        const student = new Student(req.body);
        await student.save();

        
        res.status(201).json({
            message: "Student Added Successfully",
            student
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// Get All Students
const getStudents = async (req, res) => {

    try {

        // Fetch all students
        const students = await Student.find();

        // Send student list
        res.status(200).json(students);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// Get Single Student
const getStudent = async (req, res) => {

    try {

        // Find student using ID
        const student = await Student.findById(req.params.id);

        // Check if student exists
        if (!student) {

            return res.status(404).json({
                message: "Student Not Found"
            });

        }

        // Send student details
        res.status(200).json(student);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// Update Student
const updateStudent = async (req, res) => {

    try {

        // Update student details
        const student = await Student.findByIdAndUpdate(

            req.params.id,
            req.body,
            { new: true }

        );

        // Check if student exists
        if (!student) {

            return res.status(404).json({
                message: "Student Not Found"
            });

        }

        // Send updated student
        res.status(200).json({
            message: "Student Updated Successfully",
            student
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// Delete Student
const deleteStudent = async (req, res) => {

    try {

        // Delete student by ID
        const student = await Student.findByIdAndDelete(req.params.id);

        // Check if student exists
        if (!student) {

            return res.status(404).json({
                message: "Student Not Found"
            });

        }

        // Success response
        res.status(200).json({
            message: "Student Deleted Successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// Export all controller functions
module.exports = {
    createStudent,
    getStudents,
    getStudent,
    updateStudent,
    deleteStudent

};