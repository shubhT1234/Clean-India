class Ball {
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image=loadImage("garb.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos =this.body.position;
        
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        image(this.image, 1, 1, this.width, this.height);

        pop();
      }
}