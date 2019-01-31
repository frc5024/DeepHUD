// var visionCanvas = document.getElementById('vision').getContext("2d");
// var driverCanvas = document.getElementById('driver').getContext("2d");
// console.log("Loaded canvases");
	
// var visionImg = new Image();
// var driverImg = new Image();
// console.log("Created image objects");

// visionImg.src = "http://10.50.24.2:1182/stream.mjpg";
// driverImg.src = "http://10.50.24.2:1181/stream.mjpg";

// var width = window.innerWidth / 2;
// var height = 160;

// console.log(width);
// console.log(height);

// visionImg.onload = function () {
// 	console.log("Loaded vision");
//   visionCanvas.drawImage(visionImg, 0, 0);
// }

// driverImg.onload = function () {
// 	console.log("Loaded driver");
//   driverCanvas.drawImage(driverImg, 0, 0);
// }


// console.log("Configured canvases");

// function updateImages(){
// 	driverCanvas.drawImage(driverImg, 0, 0);
// 	visionCanvas.drawImage(visionImg, 0, 0);
// 	driverCanvas.width = width;
// 	driverCanvas.height = height;
// 	visionCanvas.width = width;
// 	visionCanvas.height = height;
// }

// function visionError(){
// 	visionImg.src="./invalid.png";
// 	console.log("Failed to load vision camera");
// }

// function driverError(){
// 	driverImg.src="./invalid.png";
// 	console.log("Failed to load driver camera");
// }

// var driverImg = document.getElementById("driver");
// var visionImg = document.getElementById("vision");

// driverImg.onerror = driverError;
// visionImg.onerror = visionError;

// // document.getElementById('vision').src = "http://10.50.24.2:1182/stream.mjpg";
// // document.getElementById('vision').src = "http://10.50.24.2:1181/stream.mjpg";
