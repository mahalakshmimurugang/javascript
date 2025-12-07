let orderedPeopleCount = document.getElementById("ordered-people-count");
let historyOrdersCount = document.getElementById("history-orders-count");

let count = 0;

function increment(){
    count++;
    orderedPeopleCount.innerText = count;
}

let previousEntries = "Previous entries: " + count + " - ";

function save(){
    previousEntries += count + " - ";
    historyOrdersCount.innerText = previousEntries;
    count = 0;
    increment();
}



