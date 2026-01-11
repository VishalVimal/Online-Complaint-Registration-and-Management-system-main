const Complaint = require("../../models/Complaint-schema");
const mongoose = require("mongoose");
const { deleteComplaint } = require("../../demo-data");

const DEMO_MODE = true;

exports.deleteComplaint = (req, res) => {
  var dashboard = req.body.dashboard;
  
  if (DEMO_MODE) {
    // Demo mode
    const deleted = deleteComplaint(req.params.id);
    if (deleted) {
      if (dashboard == "userDashboard") {
        res.redirect("back");
      } else if (dashboard == "adminDashboard") {
        res.sendFile(__dirname + "/deleteComplaintSuccess.html");
      } else if (dashboard == "AdminUserDashboard") {
        res.sendFile(__dirname + "/deleteComplaintSuccess.html");
      }
      console.log("Complaint Deleted Successfully (Demo Mode)");
    } else {
      res.sendStatus(404);
    }
  } else {
    // Database mode
    Complaint.findByIdAndDelete(req.params.id, (err, docs) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
      } else {
        if (dashboard == "userDashboard") {
          res.redirect("back");
        } else if (dashboard == "adminDashboard") {
          res.sendFile(__dirname + "/deleteComplaintSuccess.html");
        } else if (dashboard == "AdminUserDashboard") {
          res.sendFile(__dirname + "/deleteComplaintSuccess.html");
        }
        console.log("Complaint Deleted Successfully");
      }
    });
  }
};
