let fs = require("fs");
let data = fs.readFileSync("num.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

let n=parseInt(readLine());
result=0;

for(let i=0;i<n;i++){
    result=result+i+1;
}
console.log(result);