class Dustbin{
    constructor(x,y,width,height,angle){
    var options = {
        isStatic: true
    }
    this.body = Bodies.rectangle(x,y,width,height,options)
    this.width = width
    this.height = height
    this.angle = angle
    Body.setAngle(this.body,angle)
    World.add(world,this.body)
    }
     display(){
        var pos =this.body.position;
        var angle = this.body.angle
        
        rectMode(CENTER);
        fill("white");
        rect(pos.x,pos.y, this.width, this.height);
       


}
}