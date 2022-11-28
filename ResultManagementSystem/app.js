const mongoose = require("mongoose");
const port = 3000;
const express = require("express");
const app = express();
mongoose.connect("mongodb://127.0.0.1:27017/student", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => console.log("connection successful...."))
    .catch((err) => console.log(err));
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("connected"));

app.set('view engine', 'ejs');

app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded());

var expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);
app.set('layout', 'layouts/layout');


const teachRoutes = require("./routes/teacherRoutes")
const studRoutes = require("./routes/studentRoutes")
app.use("/teacher", teachRoutes);
app.use("/student", studRoutes);

app.get("/", (req, res) => {
    res.render("index");

});
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });

});