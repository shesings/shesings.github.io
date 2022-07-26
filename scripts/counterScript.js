let counterHtml = document.getElementById("counterId");
console.log(counterHtml);
let totalCount = 0;
function increaseCount() {
		totalCount += 1; // same as totalCount = totalCount + 1
        counterHtml.textContent = totalCount;
}

function decreaseCount() {
	totalCount -= 1;
    counterHtml.textContent = totalCount; // if only text needs to be changed use textContent
}

function resetCount() {
    totalCount = 0;
    counterHtml.textContent = totalCount;
}