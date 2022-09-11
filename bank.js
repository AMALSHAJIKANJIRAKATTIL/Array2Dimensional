let fs = require("fs");
let data = fs.readFileSync('bank.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Define your class here
// your class name should be 'BankAccount' and method names as 'credit' and 'debit'

class BankAccount{
    constructor(){
        this.balance=0;
    }
    credit(amount){
        this.balance=this.balance+amount;
    }
    debit(amount){
        this.balance=this.balance-amount;
    }
}


// DO NOT CHANGE ANYTHING BELOW THIS LINE

let n = parseInt(readLine());
let myAccount = new BankAccount();
for (let index = 0; index < n ; index++) {
  let currentTransaction = readLine().split(" ");
  let typeOfTransaction = currentTransaction[0];
  let transactionAmount = parseInt(currentTransaction[1]);
  if (typeOfTransaction === "d") {
    myAccount.debit(transactionAmount);
  } else {
    myAccount.credit(transactionAmount);
  }
}
console.log(myAccount.balance);