class Launcher{
    constructor(body,anchor){
        var options = {
            bodyA:body,
            pointB:anchor,
            stiffness:0.04,
            length:5,
        }
        this.bodyA = body;
        this.pointB = anchor;

        this.launcher = Constraint.create(options);
        World.add(world,this.launcher);
    }
    attach(){
        this.launcher.bodyA = body;
    }
    fly(){
       this.launcher.bodyA = null;
    }
       display(){
       if(this.launcher.bodyA){
      var pointB = this.pointB;
        var pointA = this.bodyA.position;
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}
}