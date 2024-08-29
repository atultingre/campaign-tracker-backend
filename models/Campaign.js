const mongoose = require("mongoose");

const campaignSchema = new mongoose.Schema({
  campaignType: {
    type: String,
    enum: ["TT", "HQ", "CR", "IT", "TD", "FS", "JM", "DA", "CT", "AU", "GG"],
    required: true,
  },
  campaignCode: { type: String, required: true },
  date: { type: Date, required: true },
  title: { type: String, required: true },
  landingPageLink: { type: String, required: true },
  createdBy: {
    type: String,
    enum: ["Atul Tingre", "Avinash Mahajan", "Nandkishor Kadam"],
    required: true,
  },
});

const Campaign = mongoose.model("Campaign", campaignSchema);
module.exports = Campaign;
