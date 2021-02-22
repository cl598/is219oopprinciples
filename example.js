
//Encapsulation
class Colors {

    getColor(){
        return this.color;
    }

    setColor(){
        this.color = "color";
    }
}

const color = new Colors();
color.setColor("Red");
document.writeln(color.getColor());


/**
// Abstraction
function Colors(){
    this.color = "color";
}
Colors.prototype.display = function(){
    return "Color is " + this.color;
}

function ColorsPt2(color){
    this.color = "color";
}
Colors.prototype = Object.create(Colors.prototype);
let color = new ColorsPt2("blue");
document.writeln(color.display());
**/

/**
//Inheritance
class Colors{
    constructor(){
        this.color = "color";
    }
}

class ColorsPt2 extends Colors {
    constructor(color){
        super();
        this.color = color;
    }
}

let colors = new ColorsPt2("yellow");
document.writeln(colors.color);
**/

/**
// Polymorphism
class Colors{
    display(){
        document.writeln("It's a color!");
    }
}

class ColorsPt2 extends Colors{

}

let color = new ColorsPt2();
color.display();
**/