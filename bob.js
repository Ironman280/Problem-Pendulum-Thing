class Bob{
    constructor(x,y){
       var options={
         isStatic: true,
         restitution: 0.3,
         friction:0.5,
         density: 1.2
       }
      this.body = Bodies.circle(x ,y ,30 , options); 
      //this.radius = 30;
       
      
      World.add(world,this.body);
    }
      
        display(){
          var pos = this.body.position;
          fill("purple");
          ellipseMode(RADIUS)
          ellipse(pos.x, pos.y,40,40);
        }
        }