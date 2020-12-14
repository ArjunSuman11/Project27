class Bob  {
    constructor(x, y, radius){
        var Options = {
            isStatic: true,
            restitution: 0,
            friction: 0.5,
            density :0.8
        }
        this.body =Bodies.circle(x, y, radius, Options);
        this.radius= radius;
      
        
        World.add(world, this.body);
    }
    display(){
        var pos= this.body.position
        push();
        translate(pos.x, pos.y);
        fill(255, 255, 255);
        imageMode(CENTER);
        image(this.image,0, 0, this.radius, this.radius);
        pop();        
    }
}