

const express = require("express");
const bodyParser = require("body-parser");


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

//get methods for bmi calculator
app.get("/bmiCalculator", function (req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/", function (req, res) {


    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1 + num2;
    res.send("The result of the calculation is " + result);
});


//post method for bmi calculator

app.post("/bmiCalculator", function (req, res) {
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);

    var bmi = (weight / (height * height));
    res.send("Your BMI is " + bmi);
    // if (bmi < 18.6) {
    //     res.send(`Under Weight : <span>${bmi}</span>`);
    // } else if (bmi >= 18.6 && bmi < 24.9) {
    //     res.send(`Normal : <span>${bmi}</span>`);
    // } else {
    //     res.send(`Over weight : <span>${bmi}</span>`);
    // }

});

app.listen(3000, function () {
    console.log("Server is running on port 3000");
});
