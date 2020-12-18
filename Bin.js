class Bin {
    constructor(x, y, width, height) {
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos =this.body.position;
        fill("lime")
        rect(pos.x,pos.y,this.width,this.height);
        
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        pop();
      }
}