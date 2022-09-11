let fs = require("fs");
let data = fs.readFileSync('sum.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

let nq=readLine().split(" ");

let n=parseInt(nq[0]);
let q=parseInt(nq[1]);
let arr=readLine().split(" ");
let query=[];
let diff=[];
for(let i=0;i<q;i++){
    let sum=0;
    query[i]=readLine().split(" ");
    diff=arr.slice(parseInt(query[i][0]),parseInt(query[i][1])+1);
    for(let j=0;j<diff.length;j++){
       sum=sum+parseInt(diff[j]);
    }
    console.log(sum)
    
}


