//let array = [];
let noiseOff = 0.0;
let strokeWidth = 5;

function setup() {
  createCanvas(750, 750);
  background(239, 240, 189,20);
  strokeWeight(strokeWidth);
  stroke(51);
}

function draw() {
  if (mouseIsPressed){
  stroke(map(mouseX, 0, 700, 0, 180, true));
  strokeWeight(strokeWidth);
  noiseOff += 0.03;
  strokeWidth = noise(noiseOff) * 35
  line(mouseX, mouseY, pmouseX, pmouseY);
}
}
function keyTyped() {
  if (key === 's') {
    saveCanvas('zen', 'png')
  }

  else if (key === 'e') {
    clear();
  }
  return false;
}
