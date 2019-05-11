// Class
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    get color () {
        return this._color;
    }

    set color(c) {
        this._color = c;
    }

    get area () {
        return this.height * this.width
    }

    static areas(obj) {
        return obj.height * obj.width;
    }


}

class Square extends Rectangle{
    constructor(width) {
        super(width, width);

    }

}

const r = new Rectangle(100, 520)

const s = new Square(100)
s.color = 'Blue'
console.log(s.color)

