let fs = require("fs");
let data = fs.readFileSync('circle.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

class Circle{
    constructor(r){
        this.radius=r;
    }
    getArea(){
        if(this.radius<=0){
            return 0;
        }else
        return Math.ceil(3.14*this.radius**2); 
       }
    getCircumference(){
        if(this.radius<=0){
            return 0;
        }else
        return Math.ceil(2*3.14*this.radius);
    }
}

// Your class should be named `Circle`.
// Method to get area should be named `getArea`
// Method to get circumference should be named `getCircumference`.
// Your class should take radius `r` as input when creating an object.




// -------- Do NOT edit anything below this line ----------

let oneCircle = new Circle(parseInt(readLine()));
console.log(oneCircle.getArea());
console.log(oneCircle.getCircumference());