// all of the tests for the SVG
//Importing all my Classes using desctructuring since they are all in the same file.
const { Shapes, Triangle, Circle, Square } = require("./shapes.js");

//Need 3 tests -- Test Suite
// each shape should be tested for a render method 

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
// TRIANGLE TEST
describe('Trianlge class', () => {
    it('should render triangle correctly', () => {
        //arrange
        const triangle = new Triangle('SVG', 'pink');
        //act
        const svg = triangle.render();
        //assert
        const expectedSVG = `<polygon points="150, 18 244, 182 56, 182" fill="pink" /><text x="150" y="135" font-size="50" text-anchor="middle" fill="pink">SVG</text>`
    })
})
//SQUARE TEST
describe('Square class', () => {
    it('should render square correctly', () => {


        //arrange
        const square = new Square('SVG', 'pink');
        //act
        const svg = square.render();
        //assert
        const expectedSVG = `<rect x="10" y="10" width="150" height="150" stroke="black" fill="pink" stroke-width="5"/><text x="90" y="110" font-size="60" text-anchor="middle" fill="pink">SVG</text>`
    })
})







