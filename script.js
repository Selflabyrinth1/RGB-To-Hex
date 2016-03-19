
function numtohex(c){
  hex = c.toString(16);
  
  if (hex.length == 1) {
    hex = "0" + hex;
  }
  
  return hex.toUpperCase();
}

function rgbtohex() {
	red = +document.getElementById('red').value;
	green = +document.getElementById('green').value;
	blue = +document.getElementById('blue').value;
	
	
	if (red > 255 || green > 255 || blue > 255 || red < 0 || green < 0 || blue < 0) {
		document.getElementById('result').innerHTML = "Please enter a number between 0 and 255";
	} else {
		document.getElementById('result').innerHTML = "#" + numtohex(red) + numtohex(green) + numtohex(blue);
	}
}

