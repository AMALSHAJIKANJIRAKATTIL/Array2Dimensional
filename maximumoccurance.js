/*Max occurrences
Given a sorted list of n non negative integers. Find the integer which is occurring the maximum number of times. If no such number exists, please print -1. If there are multiple numbers with the same maximum occurrence count. Print all of them in ascending order.*/ 
let fs = require("fs");
const { CountQueuingStrategy } = require("stream/web");
const { moveMessagePortToContext } = require("worker_threads");
let data = fs.readFileSync('maximum.txt', 'utf-8');
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
for(let i=0;i<n;i++){
    arr[i]=parseInt(readLine());
}




let count=[];


for(let i=0;i<n;i++){
    let counting=0;
    for(let j=0;j<n;j++){
        if(arr[i]===arr[j]){
            counting++;
        }
    }
    count.push(counting);
}


let maxs=[];
let max=1;

for(let i=0;i<n;i++){

        if(count[i]>max && count[i]!=1){

            maxs=[];
            maxs.push(arr[i]);
            max=count[i];
            
        }else if(count[i]===max && count[i]!=1){
            maxs.push(arr[i]);
            max=count[i];
        }
}


for(let i=0;i<maxs.length;i++){
   
    for(let j=i;j<maxs.length;j++){
        let temp=0;
        if(maxs[i]>maxs[j]){
           
            temp=maxs[j]; 
                
            maxs[j]=maxs[i];
        
           
            maxs[i]=temp;
        }

    }}

if(maxs.length>1){
for(let i=0;i<n;i++){
   
    for(let j=0;j<n;j++){
    
        
        if(maxs[i]===maxs[j]){
           
            maxs.splice(i,1);

        }

}}}else if(maxs.length===0){
    console.log(-1);
}

for(let i=0;i<maxs.length;i++){
console.log(maxs[i]);
}
