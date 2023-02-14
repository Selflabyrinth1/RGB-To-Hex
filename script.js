
function numtohex(c){
  let hex = c.toString(16);

  if (hex.length == 1) {
    hex = "0" + hex;
  }

  return hex.toUpperCase();
}

function rgbtohex() {
	let red = +document.getElementById('red').value;
	let green = +document.getElementById('green').value;
	let blue = +document.getElementById('blue').value;
  	let sleep = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

	if (red > 255 || green > 255 || blue > 255 || red < 0 || green < 0 || blue < 0) {
		document.getElementById('result').innerHTML = "Please enter a number between 0 and 255";
	} else {
		document.getElementById('fortest').style.backgroundColor = "#" + numtohex(red) + numtohex(green) + numtohex(blue);
		document.getElementById('fortest').style.width = "0%";
		document.getElementById('result').style.scale = "0.0";
    sleep(750).then(function(){
		document.getElementById('result').innerHTML = "#" + numtohex(red) + numtohex(green) + numtohex(blue);
		document.getElementById('fortest').style.width = "100%";
		document.getElementById('result').style.scale = "1.0";
		moveProgressBars(red,green,blue);
    })
	}
}

function moveProgressBars(redlimit, greenlimit, bluelimit) {
	redlimit = (redlimit/255) * 100;
	greenlimit = (greenlimit/255) * 100;
	bluelimit = (bluelimit/255) * 100;

	let elemRed = document.getElementById("redBar");
	let elemGreen = document.getElementById("greenBar");
	let elemBlue = document.getElementById("blueBar");

	elemRed.style.width = redlimit + "%";
	elemGreen.style.width = greenlimit + "%";
	elemBlue.style.width = bluelimit + "%";
}
