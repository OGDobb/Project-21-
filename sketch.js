var wall, thickness;
var speed, bullet, weight;

function setup() {
  createCanvas(1200,400);
  createSprite(400, 200, 50, 50);
  
  speed=random(55,90);
  weight=random(400,1500);
  
  bullet=createSprite(50, 200, 10, 30);
  
  wall=createSprite(1500, 200, thickness, height/2);
  wall.shapeColor=(80,80,80);

  thickness=random(22,80);

  speed=random(223,321);
  weight=random(30,52);
}

function draw() {
  background("black");  

  if(wall.x=bullet <(bullet.width=wall.width)/2) {
  bullet.velocityX=0;
 

  if(hasCollided(bullet, wall)) {
  bullet.velocityX=0;
  var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness);
  
  if(damage>10) {
  wall.shapeColor=color(255,0,0);
  }

  if(damage>10) {
  wall.shapeColor=color(0,255,0);
  }
  }

  bullet.display();
  wall.display();
  drawSprites();
}
}

function hasCollided(bullet, wall) {

  bulletRightEdge=lbullet.x +lbullet.width;
  wallLeftEdge=lwall.x;

  if (bulletRightEdge>=wallLeftEdge) {
    return true
  }
  return false;
}