let fs = require("fs");
let data = fs.readFileSync("fold.txt", 'utf-8');
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
    arr[i]=parseInt(readLine());
}
let folds=parseInt(readLine());

let x=arr.length;

if(n%2===0){
for(let j=0;j<folds;j++){
for(let i=0;i<Math.floor(n/2);i++){
    arr[i]=arr[i]+arr[x-1];
    x--;
}
arr.splice(Math.floor(n/2))
}

}else{
    for(let j=0;j<folds;j++){
    let temp=arr[Math.floor(n/2)];
    for(let i=0;i<Math.floor(n/2);i++){
        arr[i]=arr[i]+arr[x-1];
        x--;
    }
    
    arr.splice(Math.floor(n/2));
    arr.push(temp);
    
}}
console.log(arr.length);
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}