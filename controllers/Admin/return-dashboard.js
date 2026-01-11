const Complaints = require("../../models/Complaint-schema");
const Officers = require("../../models/Authentication/Officer-schema");
const mongoose = require("mongoose");
const { getAllComplaints, getAllOfficers } = require("../../demo-data");

const DEMO_MODE = true;

exports.return_dashboard = (req, res) => {
  if (DEMO_MODE) {
    // Demo mode
    const complaints = getAllComplaints();
    const officers = getAllOfficers();
    res.render("AdminDashboard", { complaints: complaints, officers: officers });
  } else {
    // Database mode
    var officers = Officers.find((err, docs) => {
      officers = docs;
    });
    Complaints.find((err, doc) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.render("AdminDashboard", { complaints: doc, officers: officers });
      }
    });
  }
};
