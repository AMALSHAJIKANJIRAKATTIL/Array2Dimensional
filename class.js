let fs = require("fs");
let data = fs.readFileSync("class.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

// Define the required class here...

class Person{
    constructor(a , b){
        this.name=a;
        this.age=b;
    }
}


// DO NOT CHANGE ANYTHING BELOW THIS LINE
let inputString = readLine().split(" ");
let character = new Person(inputString[0],inputString[1]);
console.log(character.name);
console.log(character.age);