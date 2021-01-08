class Wall{
    constructor(x, y, width, height){
        var options ={
            isStatic: true
        };

        this.body = Bodies.rectangle(x, y, width, height, options);
        //this.width=width;
        //this.height=height;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        fill(135, 48, 48);
        //rectMode(CENTER);
        rect(0,0, width, height);
    }
    
}