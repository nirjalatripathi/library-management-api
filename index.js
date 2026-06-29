const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

connectDB();

const app = express();

app.use(express.json());
app.use(cors());

// Routes
app.use("/books", require("./routes/bookRoutes"));
app.use("/students", require("./routes/studentRoutes"));
app.use("/issues", require("./routes/issueRoutes"));


const PORT =5000;

app.listen(PORT, () => {
    console.log(`Server Running on ${PORT}`);
});