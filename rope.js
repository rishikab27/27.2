class SlingShot{
    constructor(bodyA,pointB){

      var  Option ={
        bodyA:bodyA,
        pointB:pointB,
        legnth:10
             
      }

      this.body=Constraint.create(Option);
      World.add(world,this.body);
      this.pointB= pointB;
      

      
    }

    display(){

        var A= this.body.bodyA.position;
        var B= this.pointB;

        stroke("white");
        strokeWeight(4)
        line(A.x,A.y,B.x,B.y);
        
        
    

    }
}