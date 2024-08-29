const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const campaignRoutes = require("./routes/campaign");

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI =
  "mongodb+srv://atultingrecodes:atultingrecodes@cluster0.5brac.mongodb.net/campaign-tracker";

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");

    // Middleware
    app.use(cors());
    app.use(bodyParser.json());

    // Routes
    app.use("/api/campaigns", campaignRoutes);

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Connection error", error.message);
  });
