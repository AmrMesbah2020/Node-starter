//Configuring Dotenv to use environment variables from .env file
require("dotenv").config();

//Import Modules
const path = require("path");

//Connecting the database
const connectDB = require("./config/db");
connectDB();

//Creating express server
const express = require("express");
const app = express();

//Specifying the port
const port = process.env.PORT || 5000;

const schedular = require("./jobs/schedular")

//Serving Static Folder
app.use(
  "/api/public/images",
  express.static(path.join(__dirname, "/public/images"))
);
app.use("/v1/logs", express.static(path.join(__dirname, "/logs")));

// CORS Handler
const corsHandler = require("./middlewares/corsHandler");
app.use(corsHandler);

//Using Express.JSON
app.use(express.json());

//Routes
const indexRoutes = require("./routes/indexRoutes");
app.use("/api", indexRoutes);

// Error Handler
const errorHandler = require("./middlewares/errorHandler");
app.use(errorHandler);

//Scripts Scheduling
schedular()

//Listening om the port
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
