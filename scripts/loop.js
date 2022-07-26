

let result = document.getElementById("result");
console.log(result);
let counter = "";
let i = 0;
function sequenceNumbers() {
let number = document.getElementById("numberId").value;
console.log("this is the number: " + number);

let increase = document.getElementById("increaseId").value;
console.log("this is the increase by: " + increase);
let max = parseInt(increase) + parseInt(number) + 1;
console.log(max);
for(i = ++number; i < max; i++) {
    console.log("i = " + i);
    counter += i;
    counter += " ";
    console.log("counter = " + counter);
}

result.textContent = counter;

/*
var array = new Array(increase);
	
for(counter = 0; counter < increase; counter++)	{
    if (counter == 0) {
        array[counter] = ++number;
        
        console.log("array[" + counter + "]= " + array[counter]);
    } else {
        array[counter] = ++array[counter-1];
        console.log("array[" + counter + "]= " + array[counter]);
    }
}

for(counter = 0; counter < array.length; counter++) {
    result.textContent += array[counter] + " ";       
}
*/
    
}