class Lsystem {

  constructor(axiom = "F", rules = []) {

    this.rules = rules;
    if (this.rules.length <= 0) {
      this.rules[0] = {
        a: "F",
        b: "FF+[+F-F-F]-[-F+F+F]"
      };
    }

    this.axiom = axiom;
    this.sentence = this.axiom;
    this.lenMaster = 100;
    this.len = this.lenMaster;
    this.angle = radians(25);

    this.tree = [];
  }

  setAxiom(axiom) {
    this.axiom = axiom;
  }
  setLen(len) {
    this.lenMaster = len;
  }
  setAngle(angle) {
    this.angle = angle;
  }
  setRules(rules) {
    this.rules[0] = {
      a: "F",
      b: rules
    };
  }

  generate() {
    if (this.sentence.length > 2048) {
      this.sentence = this.axiom;
      this.len = this.lenMaster;
    }

    this.len *= 0.5;
    this.nextSentence = "";

    for (let i = 0; i < this.sentence.length; i++) {
      this.found = false;
      this.current = this.sentence.charAt(i);

      for (let j = 0; j < this.rules.length; j++) {
        if (this.current == this.rules[j].a) {
          this.found = true;
          this.nextSentence += this.rules[j].b;
          break;
        }


      }
      if (!this.found) {
        this.nextSentence += this.current;

      }
    }

    this.sentence = this.nextSentence;


  }

  turtle() {
    resetMatrix();
    translate(width / 2, height);

    for (let i = 0; i < this.sentence.length; i++) {
      this.current = this.sentence.charAt(i);
      if (this.current == "F") {
        line(0, 0, 0, -this.len);

        translate(0, -this.len);

        // this.tree.push([0, 0, 0, -this.len]);

      } else if (this.current == "+") {
        rotate(this.angle);
      } else if (this.current == "-") {
        rotate(-this.angle);
      }
      else if (this.current == "[") {
        push();
      }
      else if (this.current == "]") {
        pop();
      }
    }

    stroke(51, 100);
    //resetMatrix();

    for (let i of this.tree) {

      let [beginX, endX, beginY, endY] = i;
      line(beginX, endX, beginY, endY);
      translate(endX, endY);
      this.len *= 0.67;

      // console.log(this.tree);

    }
    // console.log(this.tree);
  }

  //   this.branch = {
  //   constructor(begin, end){
  //     this.begin = begin;
  //     this.end = end;
  //     this.finished=false;
  //   }

  //   show(){
  //     stroke(51);
  //     line(this.begin.x, this.begin.y, 
  //          this.end.x, this.end.y);
  //   }

  //   branch(){
  //     let direction = p5.Vector.sub(this.end, this.begin);

  //     direction.rotate(PI/6);
  //     direction.mult(0.67);
  //     let rightEnd = p5.Vector.add(this.end, direction);
  //     direction.rotate(-PI/3);
  //     let leftEnd = p5.Vector.add(this.end, direction);
  //     let right = new Branch(this.end, rightEnd);
  //     let left = new Branch(this.end, leftEnd); 

  //     return [right, left];
  //   }



  // }



}