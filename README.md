# Logo-Generator



## Table of Contents

* [Description](#description)
* [Learning Points](#learning-points)
* [Installation](#installation)
* [Credits](#credits)
* [Questions](#questions)
* [Tests](#tests)
* [License](#license)

## Description
[Watch a video of the functionality of this code here!](https://drive.google.com/file/d/1TPln7ry1emXFAkAklgLltQuM9Z1pvWLJ/view)


The goal of this project was to create a SVG logo generator using Node.js, NPM inquirer and NPM jest. Using inquirers, the code is able to interact with the user in a terminal ones they use "node index.js" command.  They will be prompted a series of questions about how they would like to design their logo. Once the user has entered all the required information, a logo.svg file will be generated with a values of the logo they created. The logo can be viewed in the SVG Prview attatchment in VS Code -OR- in their browser. 

This project was hard at first but once I understood the information to create one shape, everything else fell into place.  This class is ramping up and i feel overwhelmed with knowlesge but I am proud that I am understanding this assignment at least. I started this project really focusing on how to set up the files that I would be using for this assignment. Creating a "examples" folder that I could direct my .svg file into once it was generated, Creatings a library that would contain all of my classes of shapes and the tests for their functionality as well.  This organization is an important part of clean code and organization. I could write all the code in my index.js file, but it would be hard for other people to read and work with. I am glad we are being shown how to properly work and create our code in a organized manner.

## Learning-Points

I stuggled for a long time with this assignment. One thing about Object Oriented Programming is that a tiny typo can cause huge mistakes. I starred at my computer for hours, console.logging so many lines of code trying to figure out why my svg folder would take in my text input as well as my text color input but the shape and shape color were not taken in.  I realized two things; I had a typo in my index.js file (line 63, shape was "shapes") and I just couldnt tell that mistake was there until I walked away from the computer for a few hours.  My other mistake was that in my shapes.js folder, my children classes did not have a super() in their constructor function. Since their parent class was taking in SHAPE color and SHAPE, that is why the end result was not getting information needed to create the SVG logo.

## Installation

User MUST have Node.js and NPM inquirer and jest installed.



## Credits

I would like to thank my fellow classmates, my tutors, teaching staff and my family for all the support through out this program.

## Questions

If you have any further questions please contact me.

- Name: Thomas Munzar
- Email: tmunzar92@gmail.com
- Github: [ThomasMunzar](https://github.com/ThomasMunzar/)

## Contributing

n/a

## Tests

Here is an example of a test I ran on my code for my circle shape. 

```S

//CIRCLE TEST

describe('Circle class', () => {
    it('should render cicle correctly', () => {
        //arrange
        const circle = new Circle('SVG', 'pink');
        //act
        const svg = circle.render();
        //assert
        const expectedSVG = `<circle cx="150" cy="100" r="80" fill="pink"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="pink">SVG</text>`
    })
})

```

---
