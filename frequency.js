let fs = require("fs");
let data = fs.readFileSync('frequency.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------

let num=readLine().split(" ");
let arr=readLine().split(" ");
let count=0;

let n=parseInt(num[1]);


for(let i=0;i<arr.length;i++){
    arr[i]=parseInt(arr[i]);
    
    if(n===arr[i]){
        count++;
    }

}
console.log(count);