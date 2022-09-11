let fs = require("fs");
const { uptime } = require("process");
let data = fs.readFileSync('flight.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
	idx++;
	return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
class Flight {
	constructor(upTime,downTime){
		this.upTime=upTime;
		this.downTime=downTime;
        
	}
	calculateFlight(){
		//write your code here
        let u=this.upTime.split(":").map(Number);
let up=u[0]*60+u[1];
let d=this.downTime.split(":").map(Number);
let dp=d[0]*60+d[1];
return dp-up;
		
	}
}

// -------- Do NOT edit anything below this line ----------
let upTime=readLine();
let downTime=readLine();


let NewFlight = new Flight(upTime,downTime);
console.log(NewFlight.calculateFlight());