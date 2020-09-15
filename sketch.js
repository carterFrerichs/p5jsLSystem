let canvas;
let recButton;
let isRecording = false;
let gifFrameCount = 0;
let tree;
let frameCount;
let gui;
let thetaSlider;
let rules = [['F', 'F', '-', '[', '-', 'F', '+', 'F', '+', 'F', ']', '+', '[', '+', 'F', '-', 'F', '-', 'F', ']'], ['F', '[', '+', 'F', ']', 'F', '[', '-', 'F', ']', '[', 'F', ']'], ['F', '[', '+', 'F', ']', 'F', '[', '-', 'F', ']', 'F'], ['F', '[', 'F', '+', 'F', '+', 'F', ']', 'F', '[', 'F', '-', 'F', '-', 'F', ']'], ['F', 'F', '[', '+', 'F', ']', '[', '-', 'F', ']', 'F', 'F', '[', '-', 'F', '+', 'F', '+', 'F', ']'], ['F', '-', 'F', '+', 'F', '-', 'F', '-', 'F']];
let selected_value;
let list;
let rule = '';
let ul;

$(document).ready(function () {

  ul = document.getElementById('sortable');

  $('#treeRadio').change(function () {
    selected_value = $("input[name='tree']:checked").val();
    while (ul.hasChildNodes()) {
      ul.removeChild(ul.firstChild)
    }
    switch (selected_value) {
      case '0':
        for (let i of rules[0]) {
          let node = document.createElement("li");                 // Create a <li> node
          let textnode = document.createTextNode(`${i}`);         // Create a text node
          node.appendChild(textnode);
          ul.appendChild(node);
        }
        break;
      case '1':
        for (let i of rules[1]) {
          let node = document.createElement("li");                 // Create a <li> node
          let textnode = document.createTextNode(`${i}`);         // Create a text node
          node.appendChild(textnode);
          ul.appendChild(node);
        }
        break;
      case '2':
        for (let i of rules[2]) {
          let node = document.createElement("li");                 // Create a <li> node
          let textnode = document.createTextNode(`${i}`);         // Create a text node
          node.appendChild(textnode);
          ul.appendChild(node);
        }
        break;
      case '3':
        for (let i of rules[3]) {
          let node = document.createElement("li");                 // Create a <li> node
          let textnode = document.createTextNode(`${i}`);         // Create a text node
          node.appendChild(textnode);
          ul.appendChild(node);
        }
        break;
      case '4':
        for (let i of rules[4]) {
          let node = document.createElement("li");
          let textnode = document.createTextNode(`${i}`);
          node.appendChild(textnode);
          ul.appendChild(node);
        }
        break;
      case '5':
        for (let i of rules[5]) {
          let node = document.createElement("li");
          let textnode = document.createTextNode(`${i}`);
          node.appendChild(textnode);
          ul.appendChild(node);
        }
        break;
    }
  });
});

function setup() {
  let p5Canvas = createCanvas(400, 400);
  canvas = p5Canvas.canvas;

  gui = createGui();
  
  recButton = createButton("record", 19, 19);
  recButton.onPress = function(){
    capturer.start();
    isRecording = true;
  };
 

  

  thetaSlider = createSliderV("theta", 30, 50, 32, 300, 0, TWO_PI);
  thetaSlider.val = radians(25);

  tree = new Lsystem();
  frameCount = 0;

}

function draw() {
  background(220);
  drawGui();

  

  list = selectAll('li');
  rule = '';
  list.forEach(el => rule += el.html());
  tree.setRules(rule);

  if (thetaSlider.isChanged) {
    tree.setAngle(thetaSlider.val);
  }

  frameCount++;
  if (frameCount % 7 === 0) {
    tree.generate();
  }


  tree.turtle();





  if(isRecording){
  capturer.capture(canvas);
  gifFrameCount++;
  }
  if(gifFrameCount===30){
    capturer.stop();
    capturer.save();
    gifFrameCount = 0;
    isRecording = false;
  }
  
}

function touchMoved() {
  // do some stuff
  return false;
}

