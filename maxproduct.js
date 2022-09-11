let fs = require("fs");
let data = fs.readFileSync("product.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
	idx++;
	return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

let a=parseInt(readLine());
let b=parseInt(readLine());

let arr1=readLine().split(" ");
let arr2=readLine().split(" ");

let max1=Number.NEGATIVE_INFINITY;
let max2=Number.NEGATIVE_INFINITY;

for(let i=0;i<a;i++){
    
arr1[i]=parseInt(arr1[i]);

if(arr1[i]<0){
    arr1[i]=0-arr1[i];
}

if(arr1[i]>max1){
    max1=arr1[i];
}


}
for(let i=0;i<b;i++){
    arr2[i]=parseInt(arr2[i]);
    if(arr2[i]<0){
        arr2[i]=0-arr2[i];
    }
    if(arr2[i]>max2){
        max2=arr2[i];
    }
}
console.log(max1*max2);