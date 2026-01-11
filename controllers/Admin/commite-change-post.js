const Complaints = require("../../models/Complaint-schema");
const mongoose = require("mongoose");
const { updateComplaint } = require("../../demo-data");

const DEMO_MODE = true;

exports.commiteChange = (req, res) => {
  var id = req.params.id;
  var work_status = req.body.workStatus;
  var officer_appointed = req.body.officer;
  var updated_doc = { approvalStatus: req.body.approval };
  if (work_status != "~") {
    updated_doc.workStatus = work_status;
  }
  if (officer_appointed != "~") {
    updated_doc.officerAppointed = officer_appointed;
  }
  
  if (DEMO_MODE) {
    // Demo mode
    const updated = updateComplaint(id, updated_doc);
    if (updated) {
      res.sendFile(__dirname + "/complaintSuccess.html");
      console.log("Complaint Successfully updated (Demo Mode)");
    } else {
      res.sendStatus(404);
    }
  } else {
    // Database mode
    console.log(updated_doc);
    Complaints.findByIdAndUpdate(id, updated_doc, (err, docs) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
      } else {
        res.sendFile(__dirname + "/complaintSuccess.html");
        console.log("Complaint Successfully updated");
      }
    });
  }
};
