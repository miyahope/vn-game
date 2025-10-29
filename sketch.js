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

let screen7_game = false;
let screen11_game = false;
let school_hallway_1, school_hallway_2, library;

/* PRELOAD LOADS FILES */
function preload(){
  newFont = loadFont('assets/VT323-Regular.ttf');
  school_hallway_1 = loadImage("assets/school_hallway_1.jpg");
}

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(550, 400);
  textAlign(CENTER);
  textFont(newFont);
  textSize(20);
  noStroke();
  background(220);

  fill(0, 0, 0, 160);
  text("", width / 2, height / 2 - 130);
  text("",270,375)

  // Create buttons 
  enterButton = new Sprite(width / 2, 250);
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
  catcher = new Sprite(-200,-200,100,20,"k");
  fallingObject = new Sprite(-400, -400,10);

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
  player = new Sprite(-200, -200, 40, 40);
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

  enterButton.w = 75
  enterButton.h = 35;
  enterButton.collider = "k";
  enterButton.color = "#ddd";
  enterButton.text = "";

  
  if (screen7_game==true) {
    showScreen7();
  }

  if (screen11_game==true) {
    showScreen11();
  }

  if (enterButton.mouse.presses()) {
    showScreen1();
    screen = 1;
    enterButton.pos = { x: -100, y: -100 };
  }
  fill(255);

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
  background(school_hallway_1);
  textStyle(newFont);
  fill(0,0,0,160)
  text("A student has been found dead in the school library. Rumours say it was no accident. \n You are a quiet student who keeps to yourself, but today you found a strange note in your locker that says \n'If you want to know the truth, meet me after school.' At the end of the day, you reach the school hallway, \n there are two paths.", width / 2, 30 );
  
  // Move extra buttons off screen
  enterButton.pos = { x: -100, y: -100 }; 
  
  //do with x + y together first  
  b1Button.pos = { x: -100, y: -100 };
  b2Button.pos = { x: -150, y: -150 };
  c1Button.pos = { x: -100, y: -100 };
  c2Button.pos = { x: -150, y: -150 };

  
  a1Button.pos = { x: -200, y: -200 };
  a1Button.w = 85;
  a1Button.h = 35;
  a1Button.collider = "k";
  a1Button.color = "#780606";
  a1Button.text = "Do you take the lit hallway toward the classrooms?";

  a2Button.pos = { x: -200, y: -200 };
  a2Button.w = 85;
  a2Button.h = 35;
  a2Button.collider = "k";
  a2Button.color = "#780606";
  a2Button.text = "Or the dark corridor toward the gym?";
}

function showScreen2() {
  background(230);
  fill(0,0,0,160)
  textStyle(NORMAL);
  text("", width / 2, height / 2 - 120);
  
  // Move extra buttons off screen
  a1Button.pos = { x: -200, y: -200 };
  a2Button.pos = { x: -50, y: -50 };
  
  // Hide b1/b2
  b1Button.pos = { x: -200, y: -200 };
  b1Button.w = 120;
  b1Button.h = 35;
  b1Button.collider = "k";
  b1Button.color = "#ddd";
  b1Button.text = "";
  
  b2Button.pos = { x: -200, y: -200 };
  b2Button.w = 120;
  b2Button.h = 35;
  b2Button.collider = "k";
  b2Button.color = "#ddd";
  b2Button.text = "";
}

function showScreen3() {
  background(230);
  fill(0,0,0,160)
  textStyle(NORMAL);
  text("", width / 2, height / 2 - 130);
  
  // Move extra buttons off screen
  a1Button.pos = { x: -200, y: -200 };
  a2Button.pos = { x: -50, y: -50 };
  b1Button.pos = { x: -100, y: -100 };
  b2Button.pos = { x: -150, y: -150 };
  
  // Hide c1/c2
  c1Button.pos = { x: -200, y: -200 };
  c1Button.w = 125;
  c1Button.h = 30;
  c1Button.collider = "k";
  c1Button.color = "#ddd";
  c1Button.text = "";
  
  c2Button.pos = { x: -200, y: -200 };
  c2Button.w = 120;
  c2Button.h = 30;
  c2Button.collider = "k";
  c2Button.color = "#ddd";
  c2Button.text = "";
}

function showScreen4() {
  background(230);
  fill(0,0,0,160)
  textStyle(NORMAL);
  text("", width / 2, height / 2 - 135);
  
  // Move extra buttons off screen
  a1Button.pos = { x: -200, y: -200 };
  a2Button.pos = { x: -50, y: -50 };
  b1Button.pos = { x: -200, y: -200 };
  b2Button.pos = { x: -200, y: -200 };
  c1Button.pos = { x: -200, y: -200 };
  c2Button.pos = { x: -200, y: -200 };

  // Hide d1
  d1Button.pos = { x: -200, y: -200 };
  d1Button.w = 220;
  d1Button.h = 40;
  d1Button.collider = "k";
  d1Button.color = "#ddd";
  d1Button.text = "";
}

function showScreen5() {
  background(230);
  fill(0)
  textStyle(NORMAL);
  text("", width / 2, height / 2 - 65);
  
  // Move extra buttons off screen
  b1Button.pos = { x: -200, y: -200 };
  b2Button.pos = { x: -50, y: -50 };
}

function showScreen6() {
  background(230);
  fill(0)
  textStyle(NORMAL);
  text("", width / 2, height / 2 - 115);
  
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
  
  //Create catcher (no images)
  catcher.pos = { x: 200, y: 380};
  catcher.color = color(95,158,160);

  //Create falling object
  fallingObject.x = 100;
  fallingObject.y = 0;
  fallingObject.color = color(0,128,128);
  fallingObject.vel.x = 0;
  fallingObject.vel.y = 2;

  // No on-screen directions
  fill(0);
  textSize(12);
  textStyle(NORMAL);
  text("", width-100, 20);
}

function showScreen7() {
  background(220);
  textStyle(NORMAL);
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

  // Score text hidden

  // Hide finish button
  if (score>=5) {
    d2Button.pos = { x: -200, y: -200 };
    d2Button.w = 60;
    d2Button.h = 40;
    d2Button.collider = "k";
    d2Button.color = "#ddd";
    d2Button.text = "";
  }
}

function showScreen8 () {
  background(230);
  fill(255)
  textStyle(NORMAL);
  text("", width / 2, height / 2 - 115);

  // move stuff
   d2Button.pos = { x: -200, y: -200 };
   catcher.pos = { x: -200, y: -200 };
   fallingObject.pos = { x: -400, y: -400 };

  // Hide e1/e2
  e1Button.pos = { x: -200, y: -200 };
  e1Button.w = 100;
  e1Button.h = 40;
  e1Button.collider = "k";
  e1Button.color = "#ddd";
  e1Button.text = "";
  
  e2Button.pos = { x: -200, y: -200 };
  e2Button.w = 100;
  e2Button.h = 40;
  e2Button.collider = "k";
  e2Button.color = "#ddd";
  e2Button.text = "";
}

function showScreen9() {
  background(230);
  textStyle(NORMAL);
  text("", width / 2, height / 2 - 115);

   // move stuff
   e1Button.pos = { x: -200, y: -200 };
   e2Button.pos = { x: -200, y: -200 };

  // hide button
  f2Button.pos = { x: -200 , y: -200 };
  f2Button.w = 100;
  f2Button.h = 40;
  f2Button.collider = "k";
  f2Button.color = "#ddd";
  f2Button.text = "";
}

function showScreen10() {
  background(230);
  textStyle(NORMAL);
  text("", width / 2, height / 2 - 115);
  
  // move stuff
   e1Button.pos = { x: -200, y: -200 };
   e2Button.pos = { x: -200, y: -200 };

  // hide button
  f1Button.pos = { x: -200, y: -200 };
  f1Button.w = 100;
  f1Button.h = 40;
  f1Button.collider = "k";
  f1Button.color = "#ddd";
  f1Button.text = "";
}

function showScreen11_initialise() {
  // move stuff
  f1Button.pos = { x: -200, y: -200 };
  f2Button.pos = { x: -200, y: -200 };

  //Create the maze (no images)
  walls = new Group();
  walls.color='pink';
  player.color = '#c8a2c8';
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
  background(230);
  textStyle(NORMAL);
  text("", width / 2 - 20, height / 2 - 100);
    
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
  // Draw start and end text (removed)

  // Player wins
  if (player.y>380) {
   textSize(20);
   text('', 160, 170);
   player.vel.x = 0;
   player.vel.y = 0;

  // hide button
  g1Button.pos = { x: -200 , y: -200 };
  g1Button.w = 70;
  g1Button.h = 30;
  g1Button.collider = "k";
  g1Button.color = "#ddd";
  g1Button.text = "";
  }
  }

  function showScreen12() {
    
    screen11_game=false;
  background(230);
  textStyle(NORMAL);
  text("", width / 2, height / 2 - 35);
  
  // move stuff
   g1Button.pos = { x: -200, y: -200 };
   //maze sprites
    player.pos = { x: -200, y: -200};
    removeSprites ();
  }
