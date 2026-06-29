const Book = require("../models/Book");

// Create New Book
const createBook = async (req, res) => {

    try {

        // Create a new book using request body
        const book = new Book(req.body);

        // Save book in MongoDB
        await book.save();

        // Send success response
        res.status(201).json({
            message: "Book Added Successfully",
            book
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });

    }

};

// Get All Books
const getBooks = async (req, res) => {

    try {

        // Find all books from database
        const books = await Book.find();

        // Send books list
        res.status(200).json(books);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// Get Single Book
const getBook = async (req, res) => {

    try {

        // Find book by ID
        const book = await Book.findById(req.params.id);

        // Check if book exists
        if (!book) {

            return res.status(404).json({
                message: "Book Not Found"
            });

        }

        // Send book details
        res.status(200).json(book);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};


// Update Book
const updateBook = async (req, res) => {

    try {
        // Update book by ID
        const book = await Book.findByIdAndUpdate(

            req.params.id,
            req.body,
            { new: true }

        );

        // Check if book exists
        if (!book) {

            return res.status(404).json({
                message: "Book Not Found"
            });

        }

        // Send updated book
        res.status(200).json({
            message: "Book Updated Successfully",
            book
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};


// Delete Book
const deleteBook = async (req, res) => {

    try {

        // Delete book by ID
        const book = await Book.findByIdAndDelete(req.params.id);

        // Check if book exists
        if (!book) {

            return res.status(404).json({
                message: "Book Not Found"
            });

        }

        // Success response
        res.status(200).json({
            message: "Book Deleted Successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// Export all controller functions
module.exports = {

    createBook,
    getBooks,
    getBook,
    updateBook,
    deleteBook

};