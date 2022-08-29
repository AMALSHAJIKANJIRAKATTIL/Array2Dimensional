let fs = require("fs");
let data = fs.readFileSync('maximum.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------

let n=parseInt(readLine());
let arr=[];
let max=Number.NEGATIVE_INFINITY;
let prd=0;
for(let i=0;i<n;i++){
    arr[i]=parseInt(readLine());
}

    

for(let j=0;j<n-1;j++){
	
    prd=arr[j]*arr[j+1];
	
    if(max<=prd){
        max=prd;
    }
}
if(n<2){

max=arr[0];

}
console.log(max);