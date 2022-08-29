let fs = require("fs");
let data = fs.readFileSync('pascal.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

let arr=[1];
let n=parseInt(readLine());

for(let i=1;i<n;i++){
    let pascal=[];
    for(let j=0;j<=i;j++){
        pascal[0]=1;
        pascal[i]=1;
        for(let x=1;x<i;x++){
          pascal[x]=arr[i-1][x-1]+arr[i-1][x];
        }
        arr[i]=pascal;

    }
}

if(n===1){
  console.log(1);
}else{

for(let i=0;i<n;i++){
  console.log(arr[n-1][i]);
}}