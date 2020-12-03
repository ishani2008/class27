class Chain{
    constructor(bodyA,bodyB){
        var opt={
            bodyA:bodyA,
            bodyB:bodyB,
            stiffiness:0.04,
            length:10
        }
        this.chain=Constraint.create(opt);
        World.add(world,this.chain);
    }
     display(){
         var posA=this.chain.bodyA.position;
         var posB=this.chain.bodyB.position;
         strokeWeight(4);
         line(posA.x,posA.y,posB.x,posB.y);
     }
}