let array=[];

function setup() {
  createCanvas(600, 600);
  background(220);
    strokeWeight(4);
}

function draw() {
if(mouseIsPressed){
    line(width-mouseX, height-mouseY,width-pmouseX,height-pmouseY);
    line(mouseX, mouseY,pmouseX,pmouseY);
    array.push([mouseX,mouseY])
}
}
function keyTyped(){
  if(key==='s'){
    saveCanvas('zen','png')
  } else if (key==='e'){
    clear();
    background(220);
  }
return false;
}
