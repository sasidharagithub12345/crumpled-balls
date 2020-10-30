class Paper {
    constructor(x,y,radius){

    var options ={ restitution:1.0,
                  density:1.2,
                  isStatic:false,
                  friction:0.5
    }
       this.body = Bodies.circle(x,y,radius,options)

        this.radius = radius;
       
        World.add(world, this.body);
    }
    display(){
    var pos = this.body.position
    ellipseMode(CENTER)
    fill("pink")
    ellipse(pos.x,pos.y,this.radius)

    }
}