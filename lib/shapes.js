// Set up Triangle, Circle, and Square classes
class Shapes { // shapes will only have one attribute it is FILL COLOR (color of the shape)
    constructor(){
        this.fillColor = "";
        }
   
    setColor(color){
        this.fillColor = color
    } //accepts a string idk if it will return anything
}

class Triangle extends Shapes {
    render(){
        return `` //Will render the specific shape
    }
}

class Circle extends Shapes {
    render(){
        return `<circle xmlns="http://www.w3.org/2000/svg" cx="150" cy="100" r="80" fill=${this.fillColor}/>` //Will render the specific shape
    }
}

class Square extends Shapes{
    render(){
        return `` //Will render the specific shape
    }
}

// export as an object could be {Triangle:Triangle...} long handed
module.exports = {Triangle, Circle, Square}

// will have different functions in different files for Text function, text color function, and so on)