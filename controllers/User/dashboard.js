const Complaint = require("../../models/Complaint-schema");
const User = require("../../models/Authentication/User-schema");
const mongoose = require("mongoose");
const { findUserById, getComplaintsByUserId } = require("../../demo-data");

const DEMO_MODE = true;

exports.dashboard = async (req, res) => {
  if (DEMO_MODE) {
    // Demo mode
    const user = findUserById(req.params.id);
    if (user) {
      const complaints = getComplaintsByUserId(req.params.id);
      res.render("UserDashboard", {
        complaints: complaints,
        userID: req.params.id,
        userName: user.username.slice(0, 2).toUpperCase(),
      });
    } else {
      res.sendStatus(404);
    }
  } else {
    // Database mode
    try {
      var username = await User.find({ userId: req.params.id }).exec();
      Complaint.find({ userID: req.params.id }, function (err, docs) {
        if (err) {
          console.log(err);
          res.sendStatus(500);
        } else {
          res.render("UserDashboard", {
            complaints: docs,
            userID: req.params.id,
            userName: username[0].username.slice(0, 2),
          });
        }
      });
    } catch (error) {
      console.log(error);
    }
  }
};
