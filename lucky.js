let fs = require("fs");
let data = fs.readFileSync('lucky.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}
// -------- Do NOT edit anything above this line ----------

let n=parseInt(readLine());
let arr=[];
for(let i=0;i<n;i++){       //input of array
    arr[i]=parseInt(readLine());
}

let count=1;
let bool=false;
for(let i=0;i<n;i++){
    
    if(arr[i]===arr[i+1]){
        count++;
    }
    else if(count===arr[i]){
       
        console.log(arr[i]);
        bool=true;
        break;
    }else{
        count=1;
    }

}
if(!bool){
    console.log(-1);
}

/*let bool=false;
for(let i=0;i<n;i++){
    let count=0;

    for(let j=0;j<n;j++){
        
        if(arr[i]===arr[j]){
            count++;
        }
    }
    if(count===arr[i]){
        lucky=arr[i];
        console.log(lucky);
        bool=true;
        break;
    }
}

if(!bool){
    console.log(-1);
}

*/