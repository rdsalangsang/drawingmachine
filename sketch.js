let array = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(240, 240, 228);
  strokeWeight(5);
}

function draw() {
  background(240, 240, 228, 20);
  stroke(map(mouseX, 0, 600, 0, 255, true));
  line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
  line(mouseX, mouseY, pmouseX, pmouseY);
}

function keyTyped() {
  if (key === 's') {
    saveCanvas('zen', 'png')
  } else if (key === 'd') {
    background(240, 240, 228);
    noFill();
    beginShape();
    for (let i = 0; i < array.length; i++) {
      //line(array[i][0],array[i][1],array[i+1][0],array[i+1][1]);
      curveVertex(array[i][0], array[i][1])
    }
    endShape();
  }
  return false;
}
