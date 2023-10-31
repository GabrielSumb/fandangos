function setup() {
    createCanvas(800, 800);
     background('gray');
  }
  
  function draw() {
   
    stroke('purple');
    fill('purple');
    if(mouseIsPressed) {
    rect (mouseX,mouseY,20,20);
  }
  }
  