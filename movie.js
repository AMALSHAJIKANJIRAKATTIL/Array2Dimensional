let fs = require("fs");
let data = fs.readFileSync('movie.txt', "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

// Define your class here
// your class name should be 'Movie' and  method name as 'run'
class Movie{
    constructor(min,ch,ln){
        this.minutes=min;
        this.nochar=ch;
        this.language=ln;
    }
    run(){
       
        return ("This "+"is "+"a "+this.language+" "+"movie "+"with "+this.nochar+" "+"characters "+"and "+"is "+this.minutes+" "+"minutes "+"long"+".");

    }
}

// DO NOT CHANGE ANYTHING BELOW THIS LINE

let language = readLine();
let numCharacters = readLine();
let lengthInMinutes = readLine();

let movie =  new Movie(lengthInMinutes, numCharacters, language)
console.log(movie.run());