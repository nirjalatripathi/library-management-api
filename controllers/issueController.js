const Issue = require("../models/Issue");
const Book = require("../models/Book");
const Student = require("../models/Student");

// Issue (Book) to Student
const issueBook = async (req, res) => {

    try {

        // Get student ID and book ID 
        const { student, book } = req.body;

        // Check if student exists
        const existingStudent = await Student.findById(student);

        if (!existingStudent) {

            return res.status(404).json({
                message: "Student Not Found"
            });

        }

        // Check if book exists
        const existingBook = await Book.findById(book);

        if (!existingBook) {

            return res.status(404).json({
                message: "Book Not Found"
            });

        }

        // Check if the book is available
        if (existingBook.quantity <= 0) {

            return res.status(400).json({
                message: "Book Not Available"
            });

        }

        // Create a new issue record
        const issue = new Issue({
            student,
            book
        });

        // Save issue record
        await issue.save();

        // Reduce available quantity by 1
        existingBook.quantity = existingBook.quantity - 1;

        // Save updated quantity
        await existingBook.save();

        // Success response
        res.status(201).json({
            message: "Book Issued Successfully",
            issue
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// Get All Issued Books
const getIssuedBooks = async (req, res) => {

    try {

        // Get all issued books 
        const issues = await Issue.find()
            .populate("student")
            .populate("book");

        // Send response
        res.status(200).json(issues);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// Return Book
const returnBook = async (req, res) => {

    try {

        // Find issue record by ID
        const issue = await Issue.findById(req.params.id);

        // Check if issue exists
        if (!issue) {

            return res.status(404).json({
                message: "Issue Record Not Found"
            });

        }

        // Check if book has already been returned
        if (issue.returnDate) {

            return res.status(400).json({
                message: "Book Already Returned"
            });

        }

        // Set return date
        issue.returnDate = new Date();

        // Save issue record
        await issue.save();

        // Find the related book
        const book = await Book.findById(issue.book);

        // Increase quantity by 1
        book.quantity = book.quantity + 1;

        // Save updated quantity
        await book.save();

        // Success response
        res.status(200).json({
            message: "Book Returned Successfully",
            issue
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};


// Delete Issue Record
const deleteIssue = async (req, res) => {

    try {

        // Find issue record
        const issue = await Issue.findById(req.params.id);

        // Check if issue exists
        if (!issue) {

            return res.status(404).json({
                message: "Issue Record Not Found"
            });

        }

        // If book was not returned, restore quantity
        if (!issue.returnDate) {

            const book = await Book.findById(issue.book);

            if (book) {

                book.quantity = book.quantity + 1;

                await book.save();

            }

        }

        // Delete issue record
        await Issue.findByIdAndDelete(req.params.id);

        // Success response
        res.status(200).json({
            message: "Issue Record Deleted Successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// Export Controller Functions
module.exports = {
    issueBook,
    getIssuedBooks,
    returnBook,
    deleteIssue

};