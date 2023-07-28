// Set up Triangle, Circle, and Square classes
class Shapes { // shapes will only have one attribute it is FILL COLOR (color of the shape)
    constructor(){
        this.fillColor ="";
        this.shape="";
        }
   
    setColor(color){
        this.fillColor = color
    } //accepts a string idk if it will return anything
    setShape(shape){
        this.shape = shape
    }
    render(){
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">${this.shape}</svg>`
    }
}

class Triangle extends Shapes {
    constructor(text,textColor){
        super();
        this.text = text;
        this.textColor = textColor;
    }
    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.fillColor}" /><text x="150" y="135" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text>` //Will render the specific shape// will use polygon to make triangle
    }
}

class Circle extends Shapes {
    constructor(text,textColor){
        super();
        this.text = text;
        this.textColor = textColor;
    }

    render(){
        
        return `<circle cx="150" cy="100" r="80" fill="${this.fillColor}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>` //Will render the specific shape
    }
}

class Square extends Shapes{
    constructor(text,textColor){
        super();
        this.text = text;
        this.textColor = textColor;
    }
    render(){
        return `<rect x="10" y="10" width="150" height="150" stroke="black" fill="${this.fillColor}" stroke-width="5"/><text x="90" y="110" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>` //Will render the specific shape will use rectangle
    }
}

// export as an object could be {Triangle:Triangle...} long handed
module.exports = {Shapes,Triangle, Circle, Square}

// will have different functions in different files for Text function, text color function, and so on)