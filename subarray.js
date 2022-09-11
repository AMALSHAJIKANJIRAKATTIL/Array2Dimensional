let fs = require("fs");
let data = fs.readFileSync('subarray.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

let n=parseInt(readLine());
let temp=[];
let arr=readLine().split(" ");
for(let i=0;i<n;i++){
    arr[i]=parseInt(arr[i]);
    temp[i]=arr[i];
}


let count=0;
let bool=false;
for(let i=0;i<n-1;i++){
    if(arr[i]<arr[i+1]){
        let count=i;
        for(let j=i;j<n-1;j++){
            if(arr[j]<arr[j+1])
                 count++;
        
        }
        if(count+1===n)
        arr[i]=arr.slice(i,count+1);
        else
        arr[i]=arr.slice(i,count);
        }
        
        else{
            continue;
        }
        
    }

    let max=[];
    for(let i=0;i<arr.length-1;i++){
        if(arr[i].length>arr[i+1].length){
            max=arr[i];
        }
    }

    
console.log(max.length,temp.lastIndexOf(max[0]),temp.lastIndexOf(max[max.length-1]));
 /*   let x=arr.lastIndexOf(sub[0],count);
    let y=arr.lastIndexOf(sub[sub.length-1],count);
console.log(sub.length,x,y);
console.log(arr);
console.log(sub);   */