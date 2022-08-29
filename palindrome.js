let fs = require("fs");
let data = fs.readFileSync("palindrome.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------

let n=readLine().split("");
let str="";
let rev="";
let temp=0;
for(let i=0;i<n.length;i++){
    str=str+n[i];
}
temp=parseInt(str);
let x=n.length-1;
for(let i=x;i>=0;i--){
    
    rev=rev+n[i];
}
if(parseInt(rev)===temp){
    console.log("True");
}else{
        console.log("False");
}