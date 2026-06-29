const express = require("express");
const router = express.Router();

// Import Controller Functions
const {
    createStudent,
    getStudents,
    getStudent,
    updateStudent,
    deleteStudent
} = require("../controllers/studentController");

// Student CRUD Routes
// Create a New Student
router.post("/create", createStudent);

// Get All Students
router.get("/", getStudents);

// Get Single Student by ID
router.get("/:id", getStudent);

// Update Student by ID
router.put("/:id", updateStudent);

// Delete Student by ID
router.delete("/:id", deleteStudent);

module.exports = router;