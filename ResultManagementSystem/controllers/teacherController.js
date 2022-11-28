const Student = require('../models/student');
const teacherLoginget = (req, res) => {
    res.render("teacher/teacherLogin");
};
const teacherLoginpost = (req, res) => {
    //** Teacher Login Password **/
    if (req.body.password == "qwerty") {
        res.redirect("/teacher/option");

    } else {
        res.render("teacher/teacherLogin", {
            error: "Please Enter Correct Password!"
        })
    }

};
const teacherViewallget = async(req, res) => {
    const allStudents = await Student.find()
    res.render("teacher/viewall", { student: allStudents })

};
const teacherEditget = async(req, res) => {
    const user = await Student.findById(req.params.id)
    res.render("teacher/edit", { user: user })
};
const teacherEditpost = async(req, res) => {
    const user = await Student.findByIdAndUpdate(req.params.id, req.body)
    res.redirect("/teacher/viewall")
};
const teacherDeleteget = async(req, res) => {
    await Student.findByIdAndDelete(req.params.id)
    res.redirect("/teacher/viewall")
};
const teacherOptionget = (req, res) => {
    res.render("teacher/option")
};
const teacherAddget = (req, res) => {
    res.render("teacher/addstudent");
};
const teacherAddpost = async(req, res) => {
    const singleStudent = new Student({
        name: req.body.name,
        roll: req.body.roll,
        dob: req.body.dob,
        score: req.body.score
    })
    try {
        const newStudent = await singleStudent.save();
        res.redirect("/teacher/add");
    } catch {
        res.send(`Student with entered roll number already exist.Please enter unique roll number`)
    }
};
module.exports = {
    teacherLoginget,
    teacherLoginpost,
    teacherViewallget,
    teacherEditget,
    teacherEditpost,
    teacherDeleteget,
    teacherAddget,
    teacherAddpost,
    teacherOptionget
}