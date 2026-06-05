// Create a Rectangle class that:

// Accepts width and height
// Has a method getArea()
// Has a method getPerimeter()`

// Example:

// const rect = new Rectangle(5, 3);

// rect.getArea();      // 15
// rect.getPerimeter(); // 16
class Rectangle{
    constructor(width,height){
        this.width=width;
        this.height=height;
    }
    getArea(){
        return this.width * this.height;
    }

    getPerimeter() {
        return 2 * (this.width + this.height);
    }
}
const rect=new Rectangle(5,3);
console.log(rect.getArea());
console.log(rect.getPerimeter());