const { clear } = require("console");

var change =0;
var moneyInserted =0;
var msg = ""; 

var items = ["Coke", "Juice", "Lollipop", "Doritos"];
const price = 15;

var messageEl = document.getElementById("message");

var totalPaid =0;

const currency_50c = 0.50;
const currency_r1 = 1;
const currency_r2 = 2;
const currency_r5 = 5;

function getTotal(){
    var currency_50cs = Number(document.getElementById("50cs").value);
    var currency_r2s = Number(document.getElementById("r2s").value);
    var currency_r5s = Number(document.getElementById("r5s").value);

if (currency_50cs > 0) {
    currency_50cs = currency_50cs * currency_50c;
}
if (currency_r1s > 0) {
    currency_r1s = currency_r1s * currency_r1;
}
if (currency_r2s > 0) {
    currency_r2s = currency_r2s * currency_r2;
}
if (currency_r5s > 0) {
    currency_r5s = currency_r5s * currency_r5;
}

totalPaid = currency_50cs + currency_r1s + currency_r2s + currency_r5s;

return totalPaid.toFixed(2);

}

function tally() {
    moneyInserted = getTotal();
    document.getElementById("paid").innerHTML = moneyInserted;
}
function clearTally() {
    moneyInserted =0;
    document.getElementById("paid").innerHTML = moneyInserted;
}
function  clearform() {
    document.getElementById("50cs").value =0;
    document.getElementById("r1s").value =0;
    document.getElementById("r2s").value =0;
    document.getElementById("r5s").value =0;
}
function cancel() {
    getTotal();

    if (totalPaid > 0) {
        msg = "Transaction cancelled. R" + totalPaid.toFixed(2) + "has been returned.";
        
        clearTally();
        clearform();

        messageEl.innerHTML = msg;
    }else if (totalPaid ==0){
        msg = "Ïnsert money first. Select an item."

        messageEl.innerHTML = msg;
    }
    
}
function calculatechange() {
    var tempChange = 0;

    if (getTotal() != 0){
        return(tempChange = (getTotal() - price).toFixed(2));
    }
    return tempChange.toFixed(2);
}
function dispenseItem(item) {
    messageEl.innerHTML = "";
    change = 0;

    var selectedItem = items[item];

    change = calculatechange();

    if (change < 0) {
        msg = "You did not pay enough. R" + totalPaid.toFixed(2) + "has been returned to the coin return."
   totalPaid = 0;
   change = 0;
   clearform();
   clearTally();

   messageEl.innerHTML = msg;
    }else if (change > 0) {
        msg = selectedItem + "has been dispensed. R" + change + "has been returned to the  coin return.";
    
        totalPaid = 0;
        change = 0;
        clearform();
        clearTally();
     
        messageEl.innerHTML = msg;
        //if they try to click the button and nothing was entered//
    }else if (totalPaid == 0) {
        msg = "Please pay before selecting a soda."
        messageEl.innerHTML = msg;
    }else if (change == 0) {
        msg = selectedItem + "has been dispensed."

        totalPaid = 0;
        change = 0;
        clearform();
        clearTally();
     
        messageEl.innerHTML = msg;
    }
}