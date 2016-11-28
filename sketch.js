// Emilie Pitre ©2016

var street;
var traffic;
var present;
var dia = 1;
var opac;

function preload() {
  street = loadTable("streetlights.csv", "header");
  traffic = loadTable("trafficlights.csv", "header")
}

function setup() {
  frameRate(4);
  createCanvas(1000, 1000);
  noStroke();
}

function draw() {
  background(20, 30, 30);

  for (var i = 0; i < street.getRowCount(); i++) {
    var lngxS = street.getNum(i, "LONGITUDE");
    var latyS = street.getNum(i, "LATITUDE");
    var present = street.getString(i, "LIGHT PRESENT");
    if (present = "Yes") {
      streetLight(lngxS, latyS);
    }
  }

  for (var i = 0; i < traffic.getRowCount(); i++) {
    var lngxT = traffic.getNum(i, "LONGITUDE");
    var latyT = traffic.getNum(i, "LATITUDE");
      trafficLight(lngxT, latyT);
  }

}

function streetLight(lngxS, latyS) {
  var x = map(lngxS, -91.29, -90.89, 0, width);
  var y = map(latyS, 30.71, 30.31, 0, height);
  // fill(200, 200, 190, 1); //glow
  // ellipse(x, y, dia*20);
  fill(200, 200, 180, 200);
  ellipse(x, y, dia);
}

function trafficLight(lngxT, latyT) {
  var x = map(lngxT, -91.29, -90.89, 0, width);
  var y = map(latyT, 30.71, 30.31, 0, height);

  //red light
  var opacR = random (100, 255);
  fill(255, 100, 100, opacR/10);
  ellipse(x, y - 3, dia*15);
  fill(200, 100, 100, opacR);
  ellipse(x, y - 3, dia*3);

  //yellow light
  var opacY = random (100, 255);
  fill(255, 255, 100, opacY/10);
  ellipse(x, y, dia*15);
  fill(200, 200, 100, opacY);
  ellipse(x, y, dia*3);

  //green light
  var opacG = random (100, 255);
  fill(100, 255, 100, opacG/10);
  ellipse(x, y + 3, dia*15);
  fill(100, 200, 100, opacG);
  ellipse(x, y + 3, dia*3);

}
