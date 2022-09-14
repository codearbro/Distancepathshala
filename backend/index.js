// express
const express = require("express");
const app = express();

// cors
const cors = require("cors");
app.use(cors());

// environment
const dotenv = require("dotenv");
dotenv.config();

// routes
const route_University = require("./Routes/University");
app.use("/api/university", route_University);

const route_Common = require("./Routes/Common");
app.use("/api/common", route_Common);

// app start
app.listen(process.env.PORT, async(e) => {
    console.log("API_STARTED at PORT : " + process.env.PORT);
});