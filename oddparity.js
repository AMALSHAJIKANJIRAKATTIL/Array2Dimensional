let fs = require("fs");
let data = fs.readFileSync('parity.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------

let n=parseInt(readLine());
let a=0;
let min=0;
let sum=0;

for(let i=0;i<n;i++){

    a=parseInt(readLine());
    if(i===0){
        min=a;
    }
    if(a<min){
        min=a;
    }

}

let digits=min.toString().split("");
for(let i=0;i<digits.length;i++){
    sum=sum+parseInt(digits[i]);
}

if(sum%2===0){
console.log(1);
}else{
    console.log(0);
}