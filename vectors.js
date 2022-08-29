let fs = require("fs");
let data = fs.readFileSync("vector.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

let a=readLine().split(" ");
let b=readLine().split(" ");

for(let i=0;i<a.length;i++){
    a[i]=parseInt(a[i]);
    b[i]=parseInt(b[i]);
}

let paralell=(a[1] * b[2] - a[2] * b[1]) - (a[0] * b[2] - b[0] * a[2]) + (a[0] * b[1] - a[1] * b[0]);
if(paralell===0){
    console.log(1);
}
let perpendicular=(a[0] * b[0]) + (a[1] * b[1]) + (a[2] * b[2]);
if(perpendicular===0){
    console.log(2);
}

if(perpendicular!=0 && paralell!=0){
    console.log(0);
}

