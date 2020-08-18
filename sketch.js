let tree;
let frameCount;
let gui;
let thetaSlider;
// let lenSlider;
// let radio;
let rules = [['F', 'F', '-', '[', '-', 'F', '+', 'F', '+', 'F', ']', '+', '[', '+', 'F', '-', 'F', '-', 'F', ']'], ['F', '[', '+', 'F', ']', 'F', '[', '-', 'F', ']', '[', 'F', ']'], ['F', '[', '+', 'F', ']', 'F', '[', '-', 'F', ']', 'F'], ['F', '[', 'F', '+', 'F', '+', 'F', ']', 'F', '[', 'F', '-', 'F', '-', 'F', ']'], ['F', 'F', '[', '+', 'F', ']', '[', '-', 'F', ']', 'F', 'F', '[', '-', 'F', '+', 'F', '+', 'F', ']'], ['F', '-', 'F', '+', 'F', '-', 'F', '-', 'F']];
let selected_value;
let button;
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
  createCanvas(400, 400);

  gui = createGui();

  thetaSlider = createSliderV("theta", 30, 50, 32, 300, 0, TWO_PI);
  thetaSlider.val = radians(25);

  // radio = createRadio();
  // radio.option('A',0);
  // radio.option('B',1);
  // radio.option('C',2);
  // radio.option('D',3);
  // radio.option('E',4);
  // radio.option('F',5);

  // radio.selected('A');
  // lenSlider = createSliderV("len", 82, 50, 32, 300, 0, 500)
  // lenSlider.val=100;
  tree = new Lsystem();
  frameCount = 0;

}

function draw() {
  background(220);
  drawGui();

  // radio.addEventListener("change", console.log(radio.selected()));
  // if(radio.selected() == 'A'){
  //   console.log('dicks');
  // }



  list = selectAll('li');
  rule = '';
  list.forEach(el => rule += el.html());
  tree.setRules(rule);

  if (thetaSlider.isChanged) {
    tree.setAngle(thetaSlider.val);
  }
  // if(lenSlider.isChanged){
  //   tree.setLen(lenSlider.val);
  // }

  frameCount++;
  if (frameCount % 7 === 0) {
    tree.generate();
  }


  tree.turtle();
}

function touchMoved() {
  // do some stuff
  return false;
}