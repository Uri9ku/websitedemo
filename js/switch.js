function switchbtn() {
	var mode = document.getElementById("theme").src;
	var x = "./img/sun.png";
	var y = "./img/night.png";

	if (mode = x) {
		mode = y;
	}else{
		mode = x;

	}
	document.getElementById("theme").src = mode;

}