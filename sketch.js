//variables 
let enterButton;
let a1Button;
let a2Button;
let b1Button;
let b2Button;
let c1Button;
let c2Button;
let d1Button;
let d2Button;
let e1Button;
let e2Button;
let f1Button;
let f2Button;
let g1Button;
let player, walls;
let catcher, fallingObject;
let score = 0;
let screen = 0;
let screen7_game = false;
let screen11_game = false;
let backgroundImg1, backgroundImg2, bunnyImg, bear2Img, sunsetImg, homeImg, catcherImg, fallingObjectImg;

/* PRELOAD LOADS FILES */
function preload(){
  newFont = loadFont('assets/VT323-Regular.ttf');
   backgroundImg1 = loadImage("assets/teddy.jpg");
  backgroundImg2 = loadImage("assets/city.jpeg")
  bunnyImg = loadImage("assets/deer.jpeg")
  bear2Img = loadImage("assets/bear2.jpeg")
  sunsetImg = loadImage("assets/sunset.jpeg")
  homeImg = loadImage("assets/home.jpg")
  fallingObjectImg = loadImage("assets/star.png")
  catcherImg = loadImage("assets/Catcherbear.png")


}

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(550, 400);
  textAlign(CENTER);
  textFont(newFont);
  textSize(20);
  noStroke();
  background(backgroundImg1)

  // Set up the home screen
  fill(128,0, 32,220)
  text("Do you want to help a teddy bear find its way home?\n Then look no further than, Teddy's Homebound Adventure.\n Navigate through the many challenges give to help this\ncuddly bear get back to its family.", width / 2, height / 2 - 130);
  text("Created By: Miya Nagra",270,375)

  // Create buttons for all screens
  enterButton = new Sprite(width / 2, 250,);
  a1Button = new Sprite(-200, -200);
  a2Button = new Sprite(-200, -200);
  b1Button = new Sprite(-200, -200);
  b2Button = new Sprite(-200, -200);
  c1Button = new Sprite(-200, -200);
  c2Button = new Sprite(-200, -200);
  d1Button = new Sprite(-200, -200);
  d2Button = new Sprite(-200, -200);
  e1Button = new Sprite(-200, -200);
  e2Button = new Sprite(-200, -200);
  f1Button = new Sprite(-200, -200);
  f2Button = new Sprite(-200, -200);
  g1Button = new Sprite(-200, -200);
  catcher = new Sprite(catcherImg,-200,-200,100,20,"k");
  fallingObject = new Sprite(fallingObjectImg,-400, -400,10);

  //rotation lock
  a1Button.rotationLock = true;  
  a2Button.rotationLock = true;
  b1Button.rotationLock = true;
  b2Button.rotationLock = true;
  c1Button.rotationLock = true;
  c2Button.rotationLock = true;
  d1Button.rotationLock = true;
  d2Button.rotationLock = true;
  e1Button.rotationLock = true;
  e2Button.rotationLock = true;
  f1Button.rotationLock = true;
  f2Button.rotationLock = true;
  g1Button.rotationLock = true;
  fallingObject.rotationlock = true;

  //maze sprites
  player = new Sprite(catcherImg,-200, -200, 40, 40);
  walls = new Group();
  walls.color='pink';
  walls.collider="s";
  player.rotationLock = true;

  new walls.Sprite(-200, -200, 300, 5);
  new walls.Sprite(-200, -200, 5, height - 15);
  new walls.Sprite(-200, -200, 5, 100);
  new walls.Sprite(-200, -200, 325, 5);
  new walls.Sprite(-200, -200, 75, 5);
  new walls.Sprite(-200, -200, 110, 5);
  new walls.Sprite(-200, -200, 110, 5);
  new walls.Sprite(-200, -200, 5, 109);
  new walls.Sprite(-200, -200, 5, 109);
  new walls.Sprite(-200, -200, 185, 5);
  new walls.Sprite(-200, -200, 5, 380);
}


/* DRAW LOOP REPEATS */
function draw() {
  // Display enter button
  enterButton.w = 75
  enterButton.h = 35;
  enterButton.collider = "k";
  enterButton.color = "lightpink";
  enterButton.text = "Enter";

  // Check any games
  if (screen7_game==true) {
    showScreen7();
  }

  if (screen11_game==true) {
    showScreen11();
  }

  // Check enter button
  if (enterButton.mouse.presses()) {
    showScreen1();
    screen = 1;
    enterButton.pos = { x: -100, y: -100 };
  }
  fill("white");

  if (screen == 1) {
    if (a1Button.mouse.presses()) {
      showScreen2();
      screen = 2;
    } else if (a2Button.mouse.presses()) {
      showScreen3();
      screen = 3;
    }
  } else if (screen == 2) {
      if (b1Button.mouse.presses()) {
        showScreen5();
        screen = 5;
  } else if (b2Button.mouse.presses()) {
        showScreen4();
        screen = 4;
      }
  } else if (screen == 3) {
        if (c1Button.mouse.presses()) {
          showScreen4();
          screen = 4;
      } else if (c2Button.mouse.presses()) {
        showScreen6();
        screen = 6;
      }
  }
    if (d1Button.mouse.presses()) {
      screen7_game=true;
      screen = 7;
      showScreen7_intialise();
    }
  if(d2Button.mouse.presses()) {
    showScreen8();
    screen7_game=false
    screen = 8
  } else if(screen == 8) {
    if(e1Button.mouse.presses()) {
  showScreen9();
  screen = 9
} else if(e2Button.mouse.presses()) {
  showScreen10();
  screen = 10
}
  }
  if (f1Button.mouse.presses()) {
      screen11_game=true;
      screen = 11
      showScreen11_initialise();
    }
  if(f2Button.mouse.presses()) {
    screen11_game=true;
    screen = 11
    showScreen11_initialise();
  }
   if (g1Button.mouse.presses()) {
      showScreen12();
      screen = 12
    }
  print(screen);
}
   
/* FUNCTIONS TO DISPLAY SCREENS */
function showScreen1() {
  //print("Enter the game")
  background(backgroundImg2);
  textStyle(ITALIC);
  fill(128,0, 32,200)
  text("Our story starts off with our missing teddy bear\n being lost in the big city. She is disorientated and\n cannot make sense of her surroundings. In attempt to\n be discreet and not seen by other humans, she hides\n in the nearest alleyway. Not the best choice on her\n part, nevertheless she needs to keep going as it\n is imperative that she finds her way back home.\n She makes her to the end of the alley and has\n found herself at a forked path, one light by street\n lamps the other in complete darkness.\n Which will she choose? ",
    width / 2, 30 
  );
  // Move extra buttons off screen
  enterButton.pos = { x: -100, y: -100 }; 
  
  //do with x and y together first  
  b1Button.pos = { x: -100, y: -100 };
  b2Button.pos = { x: -150, y: -150 };
  c1Button.pos = { x: -100, y: -100 };
  c2Button.pos = { x: -150, y: -150 };

  // Add a1 button
  a1Button.pos = { x: width / 2 - 135, y: height / 2 + 100 };
  a1Button.w = 85;
  a1Button.h = 35;
  a1Button.collider = "k";
  a1Button.color = "lightpink";
  a1Button.text = "lit path";

  // Add a2 button
  a2Button.pos = { x: width / 2 + 135, y: height / 2 + 100 };
  a2Button.w = 85;
  a2Button.h = 35;
  a2Button.collider = "k";
  a2Button.color = "lightpink";
  a2Button.text = "dark path";
}

function showScreen2() {
  print("Display screen 2");
  background(backgroundImg2);
  fill(128,0, 32,200)
  textStyle(ITALIC);
  text("She chose the lit path, the safer option thats\n for sure. She slowly makes her way down the path,\n trying not be seen by any humans. Though it\n seems none of them even take a glance at her, let alone\n look down. They are all too busy. That works for her.\n She carries on going and notices a toy shop.\n Is it worth her going in there and getting some help\n and maybe directions or should she just keep going?.  ", width / 2, height / 2 - 120);
  
  // Move extra buttons off screen
  a1Button.pos = { x: -200, y: -200 };
  a2Button.pos = { x: -50, y: -50 };
  
  // Add b1 Button
  b1Button.pos = { x: width / 2 - 160, y: height / 2 + 100 };
  b1Button.w = 120;
  b1Button.h = 35;
  b1Button.collider = "k";
  b1Button.color = "lightpink";
  b1Button.text = "Keep going";
  
  // Add b2 Button
  b2Button.pos = { x: width / 2 + 160, y: height / 2 + 100 };
  b2Button.w = 120;
  b2Button.h = 35;
  b2Button.collider = "k";
  b2Button.color = "lightpink";
  b2Button.text = "Enter the shop";
}

function showScreen3() {
  background(backgroundImg2);
  fill(128,0, 32,190)
  textStyle(ITALIC);
  text("She chose the dark street, the less safe choice,\n but a choice nonetheless. She made her way down the desolate\n street, with no people or open shops in sight. She treks on to\n find a map stand of the city.  All she has to do now is\n get onto the map stand to have a look. She could either create\n a makeshift step stool out of the scraps around the area or she\n could attempt to climb the stand without any help\n most likely resulting in her landing on her face,\n though there is a 27.5% chance she could propel herself up onto it.", width / 2, height / 2 - 130);
  
  // Move extra buttons off screen
  a1Button.pos = { x: -200, y: -200 };
  a2Button.pos = { x: -50, y: -50 };
  b1Button.pos = { x: -100, y: -100 };
  b2Button.pos = { x: -150, y: -150 };
  
  // Add c1 Button
  c1Button.pos = { x: width / 2 - 150, y: height / 2 + 100 };
  c1Button.w = 125;
  c1Button.h = 30;
  c1Button.collider = "k";
  c1Button.color = "lightpink";
  c1Button.text = "Face the climb";
  
  // Add c2 Button
  c2Button.pos = { x: width / 2 + 150, y: height / 2 + 100 };
  c2Button.w = 120;
  c2Button.h = 30;
  c2Button.collider = "k";
  c2Button.color = "lightpink";
  c2Button.text = "Step stool";
}

function showScreen4() {
  background(bear2Img);
  fill(128,0, 32,190)
  textStyle(ITALIC);
  text("She gets the information needed from either the map stand\n or the toys in the toy shop, making her come back to her senses.\n What she learnt is that she is near the outskirts of the city\n meaning she must be near the village she lives in, as it is on\n the outskirts of the city.  She refers back to the map\n looking for the ‘you are here’ dot, finds in and\n searches for her village name. Using her fluffy paw she traces the\n streets she needs to go on to get home. She\n is getting tired though and needs some energy, so she\n decides to go get some food.\n In this case teddy bears eat stars.", width / 2, height / 2 - 135);
  
  // Move extra buttons off screen
  a1Button.pos = { x: -200, y: -200 };
  a2Button.pos = { x: -50, y: -50 };
  b1Button.pos = { x: -200, y: -200 };
  b2Button.pos = { x: -200, y: -200 };
  c1Button.pos = { x: -200, y: -200 };
  c2Button.pos = { x: -200, y: -200 };

  // Add d1 Button
  d1Button.pos = { x: width / 2 , y: height / 2 + 150 };
  d1Button.w = 220;
  d1Button.h = 40;
  d1Button.collider = "k";
  d1Button.color = "lightpink";
  d1Button.text = "She's a Galactic Devourer";
}

function showScreen5() {
  print("Display screen 5");
  background(bunnyImg);
  fill('purple')
  textStyle(ITALIC);
  text("She doesn’t enter the toy shop and is left wandering around the\n city aimlessly wishing she did. She tries to make her way back\n to where the toy shop was by retracing her steps\n but ends up more lost and confused.\n Click RUN to try again.", width / 2, height / 2 - 65);
  
  // Move extra buttons off screen
  b1Button.pos = { x: -200, y: -200 };
  b2Button.pos = { x: -50, y: -50 };
}

function showScreen6() {
  print("Display screen 6");
  background(bunnyImg);
  fill("purple")
  textStyle(ITALIC);
  text("She tries to build a step stool but ultimately\n it fails as she lacks the skill and\n equipment required to put the pieces together.\n Though she does give it a good try though.\n She is still left lost and confused.\n Click RUN to try again.", width / 2, height / 2 - 115);
  
  // Move extra buttons off screen
  a1Button.pos = { x: -200, y: -200 };
  a2Button.pos = { x: -50, y: -50 };
  b1Button.pos = { x: -200, y: -200 };
  b2Button.pos = { x: -50, y: -50 };
  c1Button.pos = { x: -200, y: -200 };
  c2Button.pos = { x: -200, y: -200 };
}

function showScreen7_intialise() {

  // Move extra buttons off screen
  d1Button.pos = { x: -200, y: -200 };
  
  //Create catcher 
  catcher.pos = { x: 200, y: 380};
  catcher.color = color(95,158,160);
  catcherImg.resize(100,0);

  //Create falling object
  fallingObject.x = 100;
  fallingObject.y = 0;
  fallingObject.color = color(0,128,128);
  fallingObject.vel.x = 0;
  fallingObject.vel.y = 2;
  fallingObjectImg.resize(40,0);

    // Draw directions to screen
  fill(0);
  textSize(12);
  fill(128,0, 32,190)
  textStyle(ITALIC);
  text("Use the left and right arrows to move the teddy bear so she can catch the stars and eat them.", width-100, 20);
}

function showScreen7() {
  background(backgroundImg1);
  fill(128,0, 32,190)
  textStyle(ITALIC);
  text("", width / 2, height / 2 - 115);
  
  //If fallingObject reaches bottom, move back to random position at top
  if (fallingObject.y >= height) {
    fallingObject.x = random(width);
    fallingObject.y = 0;
    fallingObject.vel.x = 0;
    fallingObject.vel.y = random(1,5);
    score = score - 1;
  }

  //Move catcher
  if (kb.pressing("left")) {
    catcher.vel.x = -3;
  } else if (kb.pressing("right")) {
    catcher.vel.x = 3;
  } else {
    catcher.vel.x = 0;
  }

  //Stop catcher at edges of screen
  if (catcher.x < 50) {
    catcher.x = 50;
  } else if (catcher.x > width-50) {
    catcher.x = width-50;
  }

  // If fallingObject collides with catcher, move back to random position at top
  if (fallingObject.collides(catcher)) {
    fallingObject.x = random(width);
    fallingObject.y = 0;
    fallingObject.vel.x = 0;
    fallingObject.vel.y = random(1,5);
    score = score + 1;
    fallingObject.rotationLock = true; 
  }

  // Draw the score to screen
  fill(128,0, 32,190)
  textSize(20);
  text("Score = " + score, 55, 30);

  //add d2Button
  if (score>=5) {
    d2Button.pos = { x: width / 2, y: height / 2 + 145 };
    d2Button.w = 60;
    d2Button.h = 40;
    d2Button.collider = "k";
    d2Button.color = "lightpink";
    d2Button.text = "finish";
  }
}

function showScreen8 () {
  print("Display screen 8")
  background(sunsetImg);
  fill("white")
  textStyle(ITALIC);
  text("Now that she has got her energy back, she begins her walk\n back to her home. She takes a right from the map stand\n passing the toy shop. She keep going down that street till she\n goes past the market square and takes a left. She notices a street\n performer and get distracted by the balancing act.\n Since she is so interested, does she stay and watch,\n it might be dark when the act finishes or does she carry on going?", width / 2, height / 2 - 115);

  // move stuff
   d2Button.pos = { x: -200, y: -200 };
   catcher.pos = { x: -200, y: -200 };
   fallingObject.pos = { x: -400, y: -400 };

  // Add c1 Button
  e1Button.pos = { x: width / 2 - 125, y: height / 2 + 100 };
  e1Button.w = 100;
  e1Button.h = 40;
  e1Button.collider = "k";
  e1Button.color = "lightpink";
  e1Button.text = "She watches";
  
  // Add c2 Button
  e2Button.pos = { x: width / 2 + 125, y: height / 2 + 100 };
  e2Button.w = 100;
  e2Button.h = 40;
  e2Button.collider = "k";
  e2Button.color = "lightpink";
  e2Button.text = "Keep going";
}

function showScreen9() {
  print("Display screen 9")
  background(sunsetImg);
  textStyle(ITALIC);
  text("She chooses to watch the street performer, with the act\n lasting about 20 minutes. She sits through the full thing watching\n with intrigue at how the performer can keep steady while\n being so high up in the air. The mesmerisation wears off\n as she picks herself up and gets ready to keep going.\n After another 15 minutes of walking she is at the home stretch\n but it seems her memory fog has gotten to her.\n Can you help her make her way home? ", width / 2, height / 2 - 115);

   // move stuff
   e1Button.pos = { x: -200, y: -200 };
   e2Button.pos = { x: -200, y: -200 };

  //add buttons
  f2Button.pos = { x: width / 2 , y: height / 2 + 150 };
  f2Button.w = 100;
  f2Button.h = 40;
  f2Button.collider = "k";
  f2Button.color = "lightpink";
  f2Button.text = "ONWARD!";
}

function showScreen10() {
  print("Display screen 10")
  background(sunsetImg);
  textStyle(ITALIC);
  text("She chooses to keep going, disregarding the street performers'\n act, though she decides she is still a bit sleepy.\n She takes a seat on a nearby bench, just watching the clouds go by.\n The mesmerisation wears off as she picks herself up\n and gets ready to keep going. After another 15 minutes\n of walking she is at the home stretch but it seems her\n memory fog has gotten to her. Can you help her make her way home?", width / 2, height / 2 - 115);
  
  // move stuff
   e1Button.pos = { x: -200, y: -200 };
   e2Button.pos = { x: -200, y: -200 };

  //add buttons
  f1Button.pos = { x: width / 2, y: height / 2 + 150 };
  f1Button.w = 100;
  f1Button.h = 40;
  f1Button.collider = "k";
  f1Button.color = "lightpink";
  f1Button.text = "ONWARD!";
}

function showScreen11_initialise() {
  // move stuff
  f1Button.pos = { x: -200, y: -200 };
  f2Button.pos = { x: -200, y: -200 };

  //Create the maze
  walls = new Group();
  walls.color='pink';
  player.color = 'lightpurple';
  walls.collider="s";
  player.rotationLock = true;
  new walls.Sprite(160, 10, 300, 5);
  new walls.Sprite(10, height/2, 5, height - 15);  
  new walls.Sprite(150, 60, 5, 100);
  new walls.Sprite(width/2 + 35, 390, 325, 5);
  new walls.Sprite(50, 300, 75, 5); 
  new walls.Sprite(340, 146, 110, 5);
  new walls.Sprite(340, 250, 110, 5);
  new walls.Sprite(285, 198, 5, 109);
  new walls.Sprite(185, 332, 5, 109);
  new walls.Sprite(190, 197, 185, 5);
  new walls.Sprite(395, 200, 5, 380);
  player.pos = { x: 350, y: 50};
}

  function showScreen11() {
  print("Display screen 11")
  background(backgroundImg2);
  textStyle(ITALIC);
  text("Use the arrow keys\n to move the teddy bear", width / 2 - 20, height / 2 - 100);
    
    //Move the player
if (player.y < 20) {
    player.y = 20;
  }
  else if(kb.pressing('left')){
    player.vel.x=-3;
  }
  else if(kb.pressing('right')){
    player.vel.x=3;
  }
  else if(kb.pressing('up')){
    player.vel.y=-3;
  }
  else if(kb.pressing('down')){
    player.vel.y=3
  }
 else{
   player.vel.x=0;
   player.vel.y=0;
 }
  // Draw start and end text
  fill(0);
  textSize(20);
  text('Start', 355, 20);
  text('End', 80, 395);

  //Player cannot go above maze
  
  
  // Player wins
  if (player.y>380) {
   fill(0);
   textSize(20);
   text('You Win!', 160, 170);
   player.vel.x = 0;
   player.vel.y = 0;

  //add buttons
  g1Button.pos = { x: width / 2 , y: height / 2 + 150 };
  g1Button.w = 70;
  g1Button.h = 30;
  g1Button.collider = "k";
  g1Button.color = "lightpink";
  g1Button.text = "Home!";
  }
  }

  function showScreen12() {
    
    screen11_game=false;
  print("Display screen 12")
  background(homeImg);
  textStyle(ITALIC);
  text("Our teddy bear made her way home and back to her family.\n Well done! I hope you enjoyed playing this game as much\n as I did making it. Press RUN if you would like to play again.", width / 2, height / 2 - 35);
  
  // move stuff
   g1Button.pos = { x: -200, y: -200 };
   //maze sprites
    player.pos = { x: -200, y: -200};
    removeSprites ();
  }