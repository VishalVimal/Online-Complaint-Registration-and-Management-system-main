const Officers = require("../../models/Authentication/Officer-schema");
const Complaints = require("../../models/Complaint-schema");
const mongoose = require("mongoose");
const { findOfficer, getComplaintsByOfficer } = require("../../demo-data");

const DEMO_MODE = true;

exports.login_post = async (req, res) => {
  if (DEMO_MODE) {
    // Demo mode - use hardcoded credentials
    const officer = findOfficer(req.body.officername);
    if (officer && officer.officerId === req.body.password) {
      const assigned_complaints = getComplaintsByOfficer(req.body.officername);
      res.render("OfficerDashboard", {complaints: assigned_complaints});
    } else {
      res.write("<h1>Invalid Officer Credentials</h1>");
      res.write("<h3>Demo credentials: officer name: 'officer1', officer ID: 'off001'</h3>");
      res.write("<h3><a href='/sub-pages/officer/login.html'>Try Again</a></h3>");
    }
  } else {
    // Database mode
    try {
      var assigned_complaints_for_officer = await Complaints.find({ officerAppointed: req.body.officername }).exec();
      Officers.findOne({ officerName: req.body.officername }, (err, docs) => {
        if (err) {
          res.sendStatus(500);
        } else {
          if (docs == null) {
            res.sendFile(__dirname + "/unauthorized.html");
          } else if (docs.officerId == req.body.password) {
            res.render("OfficerDashboard", {complaints:assigned_complaints_for_officer});
          } else {
            res.sendFile(__dirname + "/unauthorized.html");
          }
        }
      });
    } catch (error) {
      console.log(error);
    }
  }
};
