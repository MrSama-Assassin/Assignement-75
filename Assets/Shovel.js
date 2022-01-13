class Shovel extends BaseClass {
    constructor(x, y) {
      super(x,y,60,60);
      this.image=loadImage("sprites/shovel.png");
    };
    display(){
      // to make the pumpkin move with the mouse
      var pos = this.body.position;
      pos.x = mouseX;
      pos.y = mouseY;
      super.display();
    };
  };