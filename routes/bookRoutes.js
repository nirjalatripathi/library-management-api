const express = require("express");
const router = express.Router();

// Import Controller Functions
const {
createBook,
getBooks,
getBook,
updateBook,
deleteBook

} = require("../controllers/bookController");

// Create Book
router.post("/create",createBook);

// Get All Books
router.get("/",getBooks);

// Get Single Book
router.get("/:id",getBook);

// Update Book
router.put("/:id",updateBook);

// Delete Book
router.delete("/:id",deleteBook);

module.exports=router;