let fs = require("fs");
let data = fs.readFileSync('rotate.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

let n=parseInt(readLine());
let arr=[];

for(let i=0;i<n;i++){
    arr[i]=readLine().split(" ");
}
console.log(arr[0].length);
for(let i=0;i<arr[0].length;i++){
    let str="";
    for(let j=n-1;j>=0;j--){
        
        str=str+arr[j][i]+" ";
        
    }
    console.log(str);
}