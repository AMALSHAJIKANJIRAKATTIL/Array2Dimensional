let fs = require("fs");
let data = fs.readFileSync('leader.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

let n=parseInt(readLine());
let arr=[];
let bool=false;
for(let i=0;i<n;i++){
    arr[i]=parseInt(readLine());
}

for(let i=n-1;i>=0;i--){
    if(i===n-1){
        console.log(arr[i]);
    }
    for(let j=i;j<n;j++){
        if(arr[i]<arr[j]){
            bool=false;
            break;
            
        }else if(arr[i]>arr[j]){
            bool=true;
        }
    }
    if(bool){
        console.log(arr[i]);
    }
}