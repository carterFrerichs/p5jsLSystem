let test;
let count;
let gui;
let s;
let button;
let list;
let rule = '';

function setup() {
  createCanvas(400, 400);
  gui = createGui();
  s = createSliderV("Slider", 30, 50, 32, 300, 0, TWO_PI);
  test = new Lsystem();
  count = 0;
    
  // input = createInput('FF+[+F-F-F]-[-F+F+F]');
  // input.position(20, 420);

 // button = createButton('submit', 20, 20);
  // button.position(input.x + input.width, 420);
  // button.mousePressed(()=>test.setRules(input.value()));
 
}

function draw() {
  background(220);
  drawGui();
  // if(button.isPressed){
  // test.setRules(input.value());
  // }
  // rule.concat(list.child().forEach(element => {
  //     element.html;
  // }));
    // test.setRules(rule)
    list = selectAll('li');
   rule='';
   list.forEach(el=>rule+=el.html());
   test.setRules(rule);
  
  if(s.isChanged) {
    // Print a message when Slider is changed
    // that displays its value.
    test.setAngle(s.val);
  }

  count++;
  if(count%7===0){
  test.generate();
  
   }
   test.turtle();
   //console.log(list);
}

function mousePressed(){

  test.generate();
}
