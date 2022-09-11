let fs = require("fs");
let data = fs.readFileSync('right.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

function replaceElements(arr){
    // Implement this function    
    
    for(let i=0;i<arr.length-1;i++){
        let max=Number.NEGATIVE_INFINITY;
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]>max){
                max=arr[j];
            }
        }
        arr[i]=max;

    }
    arr[arr.length-1]=-1;
    return arr;

}

// Do not edit anything below
let numElems = parseInt(readLine());
let arr = [];
for (let index=0;index<numElems;index++){
        arr.push(parseInt(readLine()));
}
let res=replaceElements(arr);
for(elem of res){
  console.log(elem);
}