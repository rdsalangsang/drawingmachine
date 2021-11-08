let array=[];

function setup() {
  createCanvas(600, 600);
  background(220);
    strokeWeight(4);
}

function draw() {
if(mouseIsPressed){
    //line(width-mouseX, height-mouseY,width-pmouseX,height-pmouseY);
    //line(mouseX, mouseY,pmouseX,pmouseY);
    array.push([mouseX,mouseY]);
}
}
function keyTyped(){
  if(key==='s'){
    saveCanvas('zen','png')
  }

    else if(key==='d'){
      for(let i = 0; i<array.length-1;i++){
    line(array[i][0],array[i][1],array[i+1][0],array[i+1][1]);
  }
}
return false;
}
