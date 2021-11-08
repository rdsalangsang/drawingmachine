function setup() {
  createCanvas(600, 600);
  background(220);
    strokeWeight(4);
}

function draw() {
if(mouseIsPressed==true){
    line(width-mouseX, height-mouseY,width-pmouseX,height-pmouseY);
    line(mouseX, mouseY,pmouseX,pmouseY);

}
}
