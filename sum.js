let fs = require("fs");
let data = fs.readFileSync('sum.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

//Write  your function here
function sumOfMultiples(x,m){
    let sum=0;
    for(let i=0;i<x.length;i++){
        if(x[i]%m===0){
            sum+=x[i];
        }

    }
    return sum;
}

// DO NOT CHANGE ANYTHING BELOW THIS LINE
let range =parseInt(readLine());
let numbers=[];
for(let each=0;each<range;each++){
  numbers.push(parseInt(readLine()));
}
let mult=parseInt(readLine());
console.log(sumOfMultiples(numbers, mult));