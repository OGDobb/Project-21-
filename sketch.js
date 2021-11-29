var wall, thickness;
var speed, bullet;
var weight;

function setup() {
  createCanvas(1600,400);
  //createSprite(400, 200, 50, 50);

  speed=random(223,321);
  weight=random(30,52);

  bullet=createSprite(50, 200, 30, 10);
  bullet.shapeColor=color('#ffffff');

  thickness=random(22,83);
  
  wall=createSprite(1400, 200, thickness, height/2);
  wall.shapeColor=color(80,80,80);

  

  //speed=random(223,321);
  //weight=random(30,52);

  bullet.velocityX=speed;
}

function draw() {
  background("black");  

  if(wall.x-bullet.x <(bullet.width+wall.width)/2) {
  bullet.velocityX=0;
 

 // if(hasCollided(car, wall)) {
  //car.velocityX=0;
  var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness);
  
  if(damage>10) {
    bullet.shapeColor=color(255,0,0);
  }
  // if(damage<180 && damage>100) {
  //   bullet.shapeColor=color(230,230,0);
  // }
  if(damage<10) {
    bullet.shapeColor=color(0,255,0);
  }
  }

  bullet.display();
  wall.display();
  drawSprites();
//}
}

function hasCollided(bullet, wall) {

  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;

  if (bulletRightEdge>=wallLeftEdge) {
    return true
  }
  return false;
}