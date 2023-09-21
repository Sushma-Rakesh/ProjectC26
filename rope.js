class rope{
	constructor(bodyA,bodyB, offsetX)
	{
		var options={
			bodyA:bodyA,
			bodyB:bodyB
		}

		this.rope=Constraint.create(options)
		World.add(world,this.rope)

		this.offsetX = offsetX
	}

	display()
	{
		var pointA=this.rope.bodyA.position;
		var pointB=this.rope.bodyB.position;

		

		strokeWeight(2);
		fill("black");
		//WRITE THE CORRECT CODE TO RENDER A LINE BETWEEN THE TWO BODIES
		push()
		strokeWeight(2)
		stroke("black")
		line(pointA.x,pointA.y,pointB.x+this.offsetX,pointB.y);
		pop()
		
	}

}