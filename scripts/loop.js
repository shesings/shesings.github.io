let number = document.getElementById("numberId");
console.log("this is the number: " + number);

let increase = document.getElementById("increaseId");
console.log("this is the increase by: " + increase);

let result = document.getElementById("result");
console.log("this is the result: " + result);

let counter;
function sequenceNumbers() {
    var array = new Array(increase);
	
	for(counter = 0; counter < increase; counter++)	{
        if (counter = 0) {
            array[counter] = number++;
        } else {
            array[counter] = array[counter-1]++;
        }
	}

    for(counter = 0; counter < array.length; counter++) {
        
    }
}