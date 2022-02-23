var cuadro;


function setup() {
  background("lightblue");
}

function draw() 
{
 
  
  if (keyIsDown (LEFT_ARROW)) {
    background("orange");
  }

  if (keyIsDown (RIGHT_ARROW)) {
    background("lightgreen");
  }

  if (keyIsDown (UP_ARROW)) {
    background("pink");
  }

  if (keyIsDown (DOWN_ARROW)) {
    background("lightblue");
  }
  drawSprites();
}




