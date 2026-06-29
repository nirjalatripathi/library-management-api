const express = require("express");
const router = express.Router();

// Import Controller Functions
const {
    issueBook,
    getIssuedBooks,
    returnBook,
    deleteIssue
} = require("../controllers/issueController");

// Book Issue Routes
// Issue (Book a Book)
router.post("/create", issueBook);

// Get All Issued Books
router.get("/", getIssuedBooks);

// Return a Book
router.put("/return/:id", returnBook);

// Delete an Issue Record
router.delete("/:id", deleteIssue);


module.exports = router;