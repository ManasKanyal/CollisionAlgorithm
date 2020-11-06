var fixedR,movingR;
var obj1,obj2,obj3,obj4;

function setup() {

  createCanvas(1200,800);
  
  fixedR = createSprite(200,200,50,80);
  fixedR.shapeColor = "green";
  fixedR.debug = true;
  
  movingR = createSprite(400,200,80,50);
  movingR.shapeColor = "green";
  movingR.debug = true;

  obj1 = createSprite(100,100,50,50);
  obj1.shapeColor = "green";

  obj2 = createSprite(200,100,50,50);
  obj2.shapeColor = "green";

  obj3 = createSprite(300,100,50,50);
  obj3.shapeColor = "green";

  obj4 = createSprite(400,100,50,50);
  obj4.shapeColor = "green";

}

function draw() {
 
  background(0);  

 movingR.x = mouseX; 
 movingR.y = mouseY; 

if( isTouching(movingR,obj1)){

  movingR.shapeColor = "blue";
  obj1.shapeColor = "blue";
  
}
else{

  movingR.shapeColor = "green";
  obj1.shapeColor = "green";

}

 
  drawSprites();
  
}

