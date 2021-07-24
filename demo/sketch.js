
var col=0;
var cx=5;
var cy=5;
var col={
  r:0,
  g:0,
  b:240
};
function setup (){
  createCanvas(windowWidth,windowHeight);
  background(0);
 // noLoop();
}
function draw(){
 
  col.r=random(100,255);
  col.g=random(0,255);
  col.b=random(100,192)
  //cx=map(mouseX,0,400,0,255)
  //cy=map(mouseX,0,400,col.r,col.g)
  //background(0);
 stroke(0);
  strokeWeight(4)
fill(col.r,col.g,col.b,100)
  cx=random(0,width);
 
 cy=random(0,height);
  circle(cx,cy,10);
  
  
}

