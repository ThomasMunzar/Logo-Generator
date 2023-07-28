//Import files and NPM's
const inquirer  = require('inquirer');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
const {Shapes,Triangle,Square,Circle} = require('./lib/shapes.js');
 const fs = require("fs");

//1. Prompt user . 
        // Text (up to 3 character) Edge case for more than three char
        // text color
        // list of shapes (circle, triangle, square)
        // shape color----Edge case for non color input
        function validateText(text){
            return text.length <=3;
        }
const questions=[
    {
        type:"input",
        name:"text",
        message:"Please choose text for you logo",
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


// Cannot until USER tells me all these parameters.

//generate content of file
    //generate SVG tag
    //generate SHAPE 
    //generate TEXT

//2. Create svg file
    //2.1 
    //2.9 use writeFile to create .SVG file


// Must have tests for each class (tri,circle,square) will have to film ourselves passing test

// function createText(fillColor, text){
//     return '<text x="150" y="125" font-size="60" text-anchor="middle" fill=${fillColor}>${text}</text>'

// }

// const data = `
// <svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">

//   <rect x="10" y="10" width="30" height="30" stroke="black" fill="transparent" stroke-width="5"/>
//   <rect x="60" y="10" rx="10" ry="10" width="30" height="30" stroke="black" fill="transparent" stroke-width="5"/>

//   <circle cx="25" cy="75" r="20" stroke="red" fill="transparent" stroke-width="5"/>
//   <ellipse cx="75" cy="75" rx="20" ry="5" stroke="red" fill="transparent" stroke-width="5"/>

//   <line x1="10" x2="50" y1="110" y2="150" stroke="orange" stroke-width="5"/>
//   <polyline points="60 110 65 120 70 115 75 130 80 125 85 140 90 135 95 150 100 145"
//       stroke="orange" fill="transparent" stroke-width="5"/>

//   <polygon points="50 160 55 180 70 180 60 190 65 205 50 195 35 205 40 190 30 180 45 180"
//       stroke="green" fill="transparent" stroke-width="5"/>

//   <path d="M20,230 Q40,205 50,230 T90,230" fill="none" stroke="blue" stroke-width="5"/>
// </svg>
// `
// function createText(fillColor, text, textColor, shape){
//     const newShape = new Triangle()
                  
// }

// fs.writeFile("examples/hw.svg", data, err =>{
//     if(err){
//         console.log(err)
//     }
// }) 

//  //data needs to be a string