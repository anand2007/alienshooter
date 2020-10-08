var road, roadImage;
var myCar, myCarImage;
var car2, car2Image;
var car3, car3Image;
// var car4, car4Image;
// var car5, car5Image;
var laser1, laser2;
var alien1, alienImage;
var bullet, bulletImage;
var fire, fireImage;
var fireGroup;
var fire1;
var fire2;
var song;
var song2;
var score = 0;
var startbg;

var bulletGroup;
var alienGroup;
var gameState = "start";


function preload() {

  roadImage = loadImage("road.PNG");
  myCarImage = loadImage("ccc.png");
  car2Image = loadImage("c.png");
  car3Image = loadImage("r.png");
  // car4Image = loadImage("o.png");
  // car5Image = loadImage("y.png");
  startbg = loadImage("race car.png");
  alienImage = loadImage("alien2.png");
  bulletImage = loadImage("real.png");
  fireImage = loadImage("fire.png");

  song = loadSound("laserSound.mp3");
  song2 = loadSound("alien.mp3");

}

function setup() {
  createCanvas(600, 600);

  road = createSprite(300, 300, 10, 10);
  road.addImage("q", roadImage);
  road.scale = 2.47;

  myCar = createSprite(300, 400, 10, 10);
  myCar.addImage("w", myCarImage);
  myCar.scale = 0.14;

  //   car2 = createSprite(350, 400, 10, 10);
  //   car2.addImage("e", car4Image);
  //   car2.scale = 0.1;

  //   car3 = createSprite(250, 400, 10, 10);
  //   car3.addImage("r", car5Image);
  //   car3.scale = 0.12;

  //   car4 = createSprite(200, 400, 10, 10);
  //   car4.addImage("t", car2Image);
  //   car4.scale = 0.1;

  //   car5 = createSprite(400, 400, 10, 10);
  //   car5.addImage("y", car3Image);
  //   car5.scale = 0.12;

  laser1 = createSprite(300, 0, 600, 8);
  laser1.shapeColor = "red";

  laser2 = createSprite(300, 600, 600, 8);
  laser2.shapeColor = "red";




  myCar.setCollider("rectangle", 0, 0, 320, 820);
  //myCar.debug = "true";


  bulletGroup = new Group();

  alienGroup = new Group();

  alienGroup2 = new Group();

  fireGroup = new Group();

  fireGroup1 = new Group();

  fireGroup2 = new Group();

  fireGroup3 = new Group();

  fireGroup4 = new Group();

  fireGroup5 = new Group();

  fireGroup6 = new Group();

  fireGroup7 = new Group();

  fireGroup8 = new Group();


}

function draw() {
  background("black")

  // gameState = start;
  if (gameState === "start") {
    background(startbg);
    //restart.visible = "false";
    fill("white");
    textFont("showcard gothic");
    textSize(20);
    text("Welcome to  'ALIEN SHOOTER'  !!", 150, 25);
    text("Aliens from the planet 'HAUMEA'have attacked Earth.", 30, 75);
    text("Save our Earth by using your car, MASTER BLASTER", 50, 125)
    text("Press ENTER key to start the game.", 150, 175);
    text("Remember not to touch the two red laser beams,", 50, 225);
    text("on top and on the bottom of the screen", 150, 275);
    text("Use arrow keys to move.", 150, 325);
    text("Press 'Space' to shoot the alienships", 150, 375);

    if (keyDown("enter")) {
      gameState = "play";
    }

  }

  if (gameState === "play") {
    background(roadImage);
    // restart.visible = "false";
    road.velocityY = 4;
    if (road.y >= 325) {
      road.y = 275;
    }
    if (keyDown("up")) {
      myCar.y = myCar.y - 4;
    }

    if (keyDown("down")) {
      myCar.y = myCar.y + 4;
    }

    if (keyDown("left")) {
      myCar.x = myCar.x - 4;
    }

    if (keyDown("right")) {
      myCar.x = myCar.x + 4;
    }




    alien();
    bullet1();

    if (fireGroup.isTouching(bulletGroup)) {
      fireGroup.destroyEach();
      bulletGroup.destroyEach();
    }

    if (fireGroup1.isTouching(bulletGroup)) {
      fireGroup1.destroyEach();
      bulletGroup.destroyEach();
    }

    if (fireGroup2.isTouching(bulletGroup)) {
      fireGroup2.destroyEach();
      bulletGroup.destroyEach();
    }
    if (fireGroup3.isTouching(bulletGroup)) {
      fireGroup3.destroyEach();
      bulletGroup.destroyEach();
    }
    if (fireGroup4.isTouching(bulletGroup)) {
      fireGroup4.destroyEach();
      bulletGroup.destroyEach();
    }

    if (fireGroup5.isTouching(bulletGroup)) {
      fireGroup5.destroyEach();
      bulletGroup.destroyEach();
    }
    if (fireGroup6.isTouching(bulletGroup)) {
      fireGroup6.destroyEach();
      bulletGroup.destroyEach();
    }
    if (fireGroup7.isTouching(bulletGroup)) {
      fireGroup7.destroyEach();
      bulletGroup.destroyEach();
    }
    if (fireGroup8.isTouching(bulletGroup)) {
      fireGroup8.destroyEach();
      bulletGroup.destroyEach();
    }
    if (bulletGroup.isTouching(alienGroup)) {
      alienGroup.destroyEach();
      bulletGroup.destroyEach();
      score = score + 1;
    }
    if (bulletGroup.isTouching(alienGroup2)) {
      alienGroup2.destroyEach();
      bulletGroup.destroyEach();
      score = score + 1;
    }

    if (fireGroup.isTouching(myCar)) {
      fireGroup.destroyEach();
      //myCar.destroy();
      gameState = "end";
    }

    if (fireGroup1.isTouching(myCar)) {
      fireGroup1.destroyEach();
      //myCar.destroy();
      gameState = "end";
    }

    if (fireGroup2.isTouching(myCar)) {
      fireGroup2.destroyEach();
      //myCar.destroy();
      gameState = "end";
    }

    if (fireGroup3.isTouching(myCar)) {
      fireGroup3.destroyEach();
      //myCar.destroy();
      gameState = "end";
    }

    if (fireGroup4.isTouching(myCar)) {
      fireGroup4.destroyEach();
      //myCar.destroy();
      gameState = "end";
    }
    if (fireGroup5.isTouching(myCar)) {
      fireGroup5.destroyEach();
      //myCar.destroy();
      gameState = "end";
    }
    if (fireGroup6.isTouching(myCar)) {
      fireGroup6.destroyEach();
      //myCar.destroy();
      gameState = "end";
    }
    if (fireGroup7.isTouching(myCar)) {
      fireGroup7.destroyEach();
      //myCar.destroy();
      gameState = "end";
    }
    if (fireGroup8.isTouching(myCar)) {
      fireGroup8.destroyEach();
      //myCar.destroy();
      gameState = "end";
    }

    if (alienGroup.isTouching(myCar)) {
      alienGroup.destroyEach();
      //myCar.destroy();
      gameState = "end";
    }


    if (alienGroup2.isTouching(myCar)) {
      alienGroup2.destroyEach();
      //myCar.destroy();
      gameState = "end";
    }

    if (myCar.isTouching(laser1) || myCar.isTouching(laser2)) {
      gameState = "end";
    }
    drawSprites();
    fill("purple");
    textSize(20);
    textFont("Showcard Gothic");
    text("Score  " + score, 100, myCar.y);
  }

  if (gameState === "end") {
    textSize(20);
    fill("red");
    textFont("Arial Black");
    text("GAME OVER!!!", 200, 200);
    text("Press 'R' to  Restart", 200, 250);

    reset();

  }
}

function alien() {
  if (frameCount % 200 === 0) {
    alien1 = createSprite(400, 400, 0, 0);
    alien1.addImage("u", alienImage);
    alien1.scale = 0.4;
    alien1.y = Math.round(random(0, 20));
    alien1.x = Math.round(random(100, 200));
    alien1.velocityY = 3.5;
    alienGroup.add(alien1);
    alienGroup.setLifetimeEach = 120;
    alien2 = createSprite(400, 400, 0, 0);
    alien2.addImage("u", alienImage);
    alien2.scale = 0.4;
    alien2.y = Math.round(random(0, 20));
    alien2.x = Math.round(random(250, 500));
    alien2.velocityY = 3.5;
    alienGroup2.add(alien2);
    alienGroup2.setLifetimeEach = 120;
    fire = createSprite(alien1.x, alien1.y, 10, 10);
    fire.addImage("o", fireImage);
    fire.scale = 0.02;
    fire.velocityY = 5;
    fire1 = createSprite(alien1.x, alien1.y + 30, 10, 10);
    fire1.addImage("o", fireImage);
    fire1.scale = 0.02;
    fire1.velocityY = 5;
    fire2 = createSprite(alien1.x, alien1.y + 60, 10, 10);
    fire2.addImage("o", fireImage);
    fire2.scale = 0.02;
    fire2.velocityY = 5;
    fire3 = createSprite(alien1.x, alien1.y + 90, 10, 10);
    fire3.addImage("o", fireImage);
    fire3.scale = 0.02;
    fire3.velocityY = 5;
    fire4 = createSprite(alien1.x, alien1.y + 120, 10, 10);
    fire4.addImage("o", fireImage);
    fire4.scale = 0.02;
    fire4.velocityY = 5;
    fire5 = createSprite(alien2.x, alien2.y + 30, 10, 10);
    fire5.addImage("o", fireImage);
    fire5.scale = 0.02;
    fire5.velocityY = 5;
    fire6 = createSprite(alien2.x, alien2.y + 60, 10, 10);
    fire6.addImage("o", fireImage);
    fire6.scale = 0.02;
    fire6.velocityY = 5;
    fire7 = createSprite(alien2.x, alien2.y + 90, 10, 10);
    fire7.addImage("o", fireImage);
    fire7.scale = 0.02;
    fire7.velocityY = 5;
    fire8 = createSprite(alien2.x, alien2.y + 120, 10, 10);
    fire8.addImage("o", fireImage);
    fire8.scale = 0.02;
    fire8.velocityY = 5;
    fireGroup.add(fire);
    fireGroup1.add(fire1);
    fireGroup2.add(fire2);
    fireGroup3.add(fire3);
    fireGroup4.add(fire4);
    fireGroup5.add(fire5);
    fireGroup6.add(fire6);
    fireGroup7.add(fire7);
    fireGroup8.add(fire8);
    fireGroup.setLifetimeEach(120);
    fireGroup1.setLifetimeEach(120);
    fireGroup2.setLifetimeEach(120);
    fireGroup3.setLifetimeEach(120);
    fireGroup4.setLifetimeEach(120);
    fireGroup5.setLifetimeEach(120);
    fireGroup6.setLifetimeEach(120);
    fireGroup7.setLifetimeEach(120);
    fireGroup8.setLifetimeEach(120);


    song2.play();
  }



}

function bullet1() {
  if (keyDown("space")) {
    bullet = createSprite(myCar.x, myCar.y - 75, 10, 20);
    bullet.velocityY = -10;
    // bullet.shapeColor = "blue";
    bullet.addImage("i", bulletImage);
    bullet.scale = 0.09;
    bullet.lifetime = 120;
    bulletGroup.add(bullet);
    song.play();
  }

}

function reset() {
  if (keyDown("r")) {
    gameState = "start";
    road.velocityY = 0;
    score = 0;
    myCar.y = 400;
    myCar.x = 300;

  }
}