class Stone{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.x=x;
        this.y=y;
        this.r=radius;
        this.image=loadImage("stone.png");
        this.body=Bodies.circle(this.x,this.y,this.r/2,options);
     
        World.add(world,this.body);
    }
    display(){
        push()
        strokeWeight(4);
        stroke("yellow");
        translate(this.body.position.x, this.body.position.y);
      
        fill(255);
        ellipseMode(RADIUS);
        imageMode(CENTER);
        image(this.image,0,0,this.r*2,this.r*2);
        pop()
    }
}