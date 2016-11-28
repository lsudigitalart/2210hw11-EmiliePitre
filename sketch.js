// Emilie Pitre ©2016 Final Project

var lights;
var lngx;
var laty;
var present;
var dia = 1

function preload() {
  lights = loadTable("streetlights.csv", "header");
}

function setup() {
  createCanvas(700, 700);
  noStroke();
}

function draw() {
  background(20, 30, 30);

  for (var i = 0; i < lights.getRowCount(); i++) {
    var lngx = lights.getNum(i, "LONGITUDE");
    var laty = lights.getNum(i, "LATITUDE");
    var present = lights.getString(i, "LIGHT PRESENT");
    if (present = "Yes") {
      streetLight(lngx, laty);
    }
  }
}

function streetLight(lngx, laty) {
  var x = map(lngx, -91.29, -90.89, 0, width);
  var y = map(laty, 30.71, 30.31, 0, height);
  fill(200, 200, 120, 1);
  ellipse(x, y, dia*18);
  fill(200, 200, 120, 200);
  ellipse(x, y, dia);
}
