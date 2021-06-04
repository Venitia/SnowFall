class Snow {
  constructor(x,y){
     var options= {
      'restitution' : 0.8,
      'friction':1.0,
      'density':20,
       
     }
     
     this.body = Bodies.circle(x,y,5,options);
     this.radius = 5;
     
     World.add(world,this.body);
     //this.trajectory =[];
  }
  updateY(){
    if(this.body.position.y > height){
       Matter.Body.setPosition(this.body, {x: random(0,1500),y: random(0,600)})
    }
  }
  display(){
     var snowflake = this.body.position;
      
       fill ("lightblue");
       ellipse(snowflake.x,snowflake.y,this.radius,this.radius);
       
       
     
   
    
     
  }
}