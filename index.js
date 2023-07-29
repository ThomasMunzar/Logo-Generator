//Import files and NPM's
const inquirer  = require('inquirer');
const {Shapes,Triangle,Square,Circle} = require('./lib/shapes.js');
 const fs = require("fs");

//1. Prompt user . 
        // Text (up to 3 character) Edge case for more than three char
        // text color
        // list of shapes (circle, triangle, square)
        // shape color----Edge case for non color input
        function validateText(text){
            return text.length <= 3;   
        }

const questions=[
    {
        type:"input",
        name:"text",
        message:"Please choose text for you logo (Must be 3 or less characters)",
        validate: validateText, // Validate the input using the validateText function
    },
    {
        type:"input",
        name:"textColor",
        message:"What color would you like your text to be?"
    },
    {
        type:"list",
        name:"shape",
        message:"What shape would you like your logo to be?",
        choices:["Triangle","Circle","Square"],

    },
    {
        type:"input",
        name:"shapeColor",
        message:"What color would you like your shape to be?"
    },
]
// TODO: ADD A FUNCNTION THAT TAKES IN USER ANSWERS
function init() {
    //We would insert object of answers in this function
    // Ask the USER QUESTIONS (an array)
    inquirer
        .prompt(
            questions)



        .then((answers) => {
            const svg = new Shapes()
            let shape;

            if (answers.shape === "Circle"){
                shape = new Circle (answers.text, answers.textColor)
            }
            if (answers.shape === "Triangle"){
                shape = new Triangle(answers.text, answers.textColor)
            }
            if (answers.shape === "Square"){
                shape = new Square(answers.text, answers.textColor)
            }
            shape.setColor(answers.shapeColor)//sets the fill color of the shape
console.log(shape.fillColor)
            svg.setShape(shape.render());
            console.log(shape)
            fs.writeFileSync("./examples/logo.svg", svg.render())


            console.log(answers)
        });
        
}
init();
