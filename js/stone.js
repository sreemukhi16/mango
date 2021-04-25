class stone
{
	constructor(bodyA,pointB,r)
	{
		var options={
			bodyA:bodyA,
			pointB:pointB,
			isStatic:false,
			restitution:0,
			friction:1,
			density:1.2
			}
		
		this.r=r
		this.image=loadImage("images/stone.png");
		this.pointB = pointB
        this.stone = Constraint.create(options);
        World.add(world, this.stone);
	
		
	}
	display()

	
	{

		if(this.stone.bodyA){
			var pointA = this.stone.bodyA.position
			var pointB = this.pointB

			
			line = (pointA.x,pointA.y,pointB.x,pointB.y)
		}
			var stonepos=this.stone.position;		
			push()
			translate(stonepos.x, stonepos.y);
			strokeWeight(8)
			fill(255,0,255)
			imageMode(CENTER);
			
			image(this.image, 0,0,this.r*2, this.r*2)
			pop()
			
	}

}