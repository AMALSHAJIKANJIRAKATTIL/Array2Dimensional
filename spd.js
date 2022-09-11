let fs = require("fs");
let data = fs.readFileSync('spd.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
	idx++;
	return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking inplet fs = require("fs");

let t=parseInt(readLine());
let n=parseInt(readLine());
let arr=readLine().split(" ");

let output=[];

for(let i=0;i<n;i++){
    arr[i]=parseInt(arr[i]);
}



for(let i=0;i<t;i++){
    if(output.length!=0){
        for(let q=0;q<n;q++){
            arr[q]=output[q];
        }
    }
    for(let j=0;j<n;j++){
        let mul=1;
        for(let x=0;x<n;x++){
            if(x===j){
                continue;
            }else
            mul=mul*arr[x];
            
        }
        output[j]=mul;
    }
    console.log(...output);
}
