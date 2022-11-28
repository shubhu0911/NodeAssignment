const Student = require('../models/student');
const studentLoginget = (req, res) => {
    res.render("student/login");
};
const studentLoginpost = async(req, res) => {
    const Sturoll = req.body.roll;
    const Studob = req.body.dob;
    const individualStudent = await Student.findOne({ roll: Sturoll });
    const individualStudentDob = await Student.findOne({ dob: Studob });
    if (!individualStudent || !individualStudentDob) {
        res.render("student/login", {
            error: "Please login with correct Roll Number and Date of Birth"
        })
    }
    res.render("student/view", { one: individualStudent });
};
module.exports = {
    studentLoginget,
    studentLoginpost
}