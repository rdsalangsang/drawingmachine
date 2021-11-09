let array = [];

function setup() {
  createCanvas(600, 600);
  background(240, 240, 228);
  strokeWeight(4);
  noFill();
}

function draw() {
  if (mouseIsPressed) {
    //line(width-mouseX, height-mouseY,width-pmouseX,height-pmouseY);
    //line(mouseX, mouseY,pmouseX,pmouseY);
    background(0);
    text('Breathe in...and then out.', 300, 300);
    text('Think not of its perfection.', 300, 350);
    text('But the art process.',300,400)
    fill(220);
    array.push([mouseX, mouseY]);
  }
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
