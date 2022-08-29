let fs = require("fs");
let data = fs.readFileSync('kangaroo.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------

let n=parseInt(readLine());
let arr=[];
let d1=0;
let d2=0;
let start=0;
let end=0;
let start1=0;
let end1=0;
let steps=0;
let steps1=0;

for(let i=0;i<n;i++){
  let same=false;
    arr=readLine().split(" ");
    for(let j=0;j<arr.length;j++){
        
        arr[j]=parseInt(arr[j]);
    }
    if(arr[0]< 0){
      break;
    }
    if(0 <= arr[0] && arr[0]< arr[2] && arr[2] <= 10000 && 1 <= arr[1] && arr[1] <= 10000 && 1 <= arr[3] && arr[3] <= 10000){
      start=arr[0];
      end=arr[1];
      start1=arr[2];
      end1=arr[3];

      for(let x=0;x<10000;x++){
      d1=start+end;
      start=d1;
      steps++;
      d2=start1+end1;
      start1=d2;
      steps1++;
      if(d1===d2){
        same=true;
        break;
      }

    }
    if(same){
      console.log("Yes");
    }else{
      console.log("No");
    }
}
}
