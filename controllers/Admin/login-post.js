const Admin=require("../../models/Authentication/Admin-schema")
const Officers = require("../../models/Authentication/Officer-schema");
const Complaints=require("../../models/Complaint-schema")
const mongoose=require("mongoose")
const { findAdmin, getAllComplaints, getAllOfficers } = require("../../demo-data");

const DEMO_MODE = true;

exports.login=(req,res)=>{
    if (DEMO_MODE) {
        // Demo mode - use hardcoded credentials
        const admin = findAdmin(req.body.name);
        if (admin && admin.password === req.body.password) {
            const complaints = getAllComplaints();
            const officers = getAllOfficers();
            res.render("AdminDashboard", {complaints: complaints, officers: officers});
        } else {
            res.write("<h1>Invalid Admin Credentials</h1>");
            res.write("<h3>Demo credentials: name: 'admin', password: 'admin123'</h3>");
            res.write("<h3><a href='/sub-pages/admin/login.html'>Try Again</a></h3>");
        }
    } else {
        // Database mode
        var doc = Complaints.find((err,docs)=>{
            doc=docs
        })
        var officers = Officers.find((err,docs)=>{
            officers=docs
        })
        Admin.find((err,docs)=>{
            if(err){
                res.sendStatus(500)
            }else{
                if (docs[0].name===req.body.name && docs[0].password===req.body.password) {
                    res.render("AdminDashboard",{complaints:doc,officers:officers})
                } else {
                    res.sendFile(__dirname+"/unauthorized.html")
                }
            }
        })
    }
}