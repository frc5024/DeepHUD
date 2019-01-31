// This set of functions if for keeping the cameras awake

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

function wake(){
	robotstat.open("GET", "http://10.50.24.2:1182", true);
	robotstat.send(null);
	rpistat.open("GET", "http://10.50.24.2:1181", true);
	rpistat.send(null);
}