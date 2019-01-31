// This set of functions if for updating the status on the web interface

function makeHttpObject() {
  try {return new XMLHttpRequest();}
  catch (error) {}
  try {return new ActiveXObject("Msxml2.XMLHTTP");}
  catch (error) {}
  try {return new ActiveXObject("Microsoft.XMLHTTP");}
  catch (error) {}

  throw new Error("Could not create HTTP request object.");
}

var robotstat = makeHttpObject();
var rpistat = makeHttpObject();

function checkStatus(){
	// Check robot webserver
	robotstat.open("GET", "http://10.50.24.2:1182", true);
	robotstat.send(null);
	
	// Check rpi webserver
	rpistat.open("GET", "http://raspberrypi.local/isalive", true);
	rpistat.send(null);
	
	robotstat.onreadystatechange = function() {
		if(robotstat.status == 200){
			document.getElementById("robot-status").innerHTML = "Robot: <c>Connected</c>";
		}
	}
	
	rpistat.onreadystatechange = function() {
		if(rpistat.status == 200){
			document.getElementById("rpi-status").innerHTML = "RPi: <c>Connected</c>";
		}
	}
}