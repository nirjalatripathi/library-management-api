const mongoose = require("mongoose");

// Book Issue Schema
const issueSchema = new mongoose.Schema({

    student:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Student"
    },
    book:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Book"
    },
    issueDate:{
        type:Date,
        default:Date.now
    },
    returnDate:{
        type:Date
    }

});

module.exports = mongoose.model("Issue",issueSchema);