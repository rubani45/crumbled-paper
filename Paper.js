class Paper {
    constructor(x,y)
	{
		var options={
			isStatic : false,
            density : 1.2,
            restitution : 0.3,
            friction : 0
		}
		
		this.body=Bodies.circle( x, y, 100 , options);
		this.image = loadImage("paper.png");
		this.x = x;
		this.y =y;

 		World.add(world, this.body);

	}
  display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("green");
      fill(255);
      image(this.image, 0, 0, 120, 120);
      pop();
    }
}