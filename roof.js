class Roof {
    constructor(x,y,width,height){
        var Options={
            isStatic: true
        }
        
        this.body=Bodies.rectangle(x, y, width, height, Options);
        this.width= width;
        this.height= height;
        


        World.add(world, this.body);
    }

    display(){
        rectMode(CENTER);
        fill(255,255,255);
       
    }
    
}