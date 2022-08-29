let fs = require("fs");
let data = fs.readFileSync("tribanocci.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------

let n=parseInt(readLine());

let arr=[0,1,1];
if(n===1 || n===2){
    console.log(arr[n]);
}
else if(n>2){
for(let i=0;i<n;i++){

let first=arr[i];
let second=arr[i+1];
let third=arr[i+2];
let sum=first+second+third;
arr.push(sum);

}
console.log(arr[n]);
}

