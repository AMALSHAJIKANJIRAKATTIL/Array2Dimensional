let fs = require("fs");
let data = fs.readFileSync('matrix.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

// name your function as rightToLeftDiagonal
function rightToLeftDiagonal(matrix){
	let diagonal=[];
	i=0;
	for (let row = m-1; row >= 0; row--) {
		diagonal[i]=matrix[i][row];
		i++;
	}
	return diagonal;
}


// Do not change anything below this line
let m = parseInt(readLine());
let matrix = [];
for (let row = 0; row < m; row++) {
  let rowElements = readLine().split(" ");
  matrix.push(rowElements);
}
let result = rightToLeftDiagonal(matrix);
for (element of result) {
  console.log(element);
}