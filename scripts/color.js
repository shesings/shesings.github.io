function changeBackgroundColor(color) {
	// document.body.style.backgroundColor = "red";
	document.body.style.backgroundColor = color;
  
  // black background does not do well for black text, so we change color of the text
	if (color === 'black') {
  	document.body.style.color = "white";
  }
}