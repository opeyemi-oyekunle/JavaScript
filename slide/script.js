var img = document.getElementsByClassName("img");
var pos = 0;
var timer = setInterval(slideImage, 1000);
function slideImage() {
	pos++;
	for (var i = 0; i < img.length; i++) {
		img[i].style.display = "none";
	}
	if(pos >= (img.length-1)) pos = 0
	img[pos].style.display = "block";
}

for (var i = 0; i < img.length; i++) {
	img[i].addEventListener("mouseover",function () {
		clearInterval(timer);
	} ,false)
	img[i].addEventListener("mouseout",function () {
		timer = setInterval(slideImage, 1000);
	} ,false)
}