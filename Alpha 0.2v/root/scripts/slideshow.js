var i = 0,
	imgList = [],
	path = 'images/';

//Populate Image List
imgList[0] = path + 'slide0.jpg';
imgList[1] = path + 'slide1.jpg';
imgList[2] = path + 'slide2.jpg';

//Event Listener (Wait For Click)
document.getElementById("right-slide").addEventListener("click", rightScroll);
document.getElementById("left-slide").addEventListener("click", leftScroll);
//First Image
window.addEventListener("load", imgDisplay);

function rightScroll(){
	//Cycle Through List
	if (i == imgList.length - 1){
		i = 0;
	} else {
		i++;
	}
	imgDisplay();
}

function leftScroll(){
	//Cycle Through List
	if (i == 0){
		i = imgList.length - 1;
	} else {
		i--;
	}
	imgDisplay();
}

function imgDisplay(){
	//Slide Images Here
	document.getElementById("header").style.backgroundImage = `url(${imgList[i]})`;
}