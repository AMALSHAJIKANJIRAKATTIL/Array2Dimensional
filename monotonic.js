let fs = require("fs");
let data = fs.readFileSync('monotonic.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------

let n=parseInt(readLine());
let arr=[];
let monotronic=true;

for(let i=0;i<n;i++){
    arr[i]=parseInt(readLine());
}

if(arr[0]===arr[n-1]){
//    console.log("=");
    for(let i=0;i<n-1;i++){
        if(arr[i]<arr[i+1]){
            console.log(0);
            monotronic=false;
            break;
        }
        
    }
    if(monotronic===true){
        console.log(1);}
}

else if(arr[0]>arr[n-1]){
 //   console.log(">");
    for(let i=0;i<n-1;i++){
        if(arr[i]<arr[i+1]){
            console.log(0);
            monotronic=false;
            break;
        }
        
    }
    if(monotronic){
        console.log(1);}
    
}else if(arr[0]<arr[n-1])
{
 //   console.log("<");
    for(let i=0;i<n-1;i++){
        if(arr[i]>arr[i+1]){
            console.log(0);
            monotronic=false;
            break;
        }
       
    }
    if(monotronic){
        console.log(1);}
}
