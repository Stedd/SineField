function setup() {
	//Setup canvas
	width 					= 700;
	height 					= width/1.777777777778;
	createCanvas			(width,height);
	background				(125);
	
	//Game variables
	points 					= 0;
	textX					= 20;
	textY					= 20;
	textSize				(16);
	droneToFieldDist		= 0;
	pointBonus				= 0;
	
	//Drone variables
	posX					= width/2;
	posY					= height/2;
	droneWidth				= 20;
	droneHeight				= 20;
	radius					= 75;
	speed					= 10;
	
	//Point field variables
	fieldX					= width/2;
	fieldY					= height/2;
	fieldWidth				= 75;
	fieldHeight				= 75;
	fieldAliveTime			= 0;	
	fieldaliveTimeTrigger	= 150;
		
    }

    function draw() {
	background				(125);

	//Field Control
	if (fieldAliveTime <= fieldaliveTimeTrigger){
		fieldAliveTime++;
		fill(200);
		ellipse(fieldX, fieldY, fieldWidth, fieldHeight);
		
	}
	else{
		fieldAliveTime = 0;
		fieldX = random(0+radius, width-fieldWidth-radius);
		fieldY = random(0+radius, height-fieldHeight-radius);
	}

	//Mousecontrol
	posX = (mouseX)+radius*cos(millis()*0.00025*speed);
	posY = (mouseY)+radius*sin(millis()*0.00025*speed);
	fill(255);
	ellipse(posX, posY, droneWidth, droneHeight);

	//Check if drone is inside point field
	//Count up points, and display on text.
	//Multiplier increases when closer to center of field
	droneToFieldDist = dist(posX,posY,fieldX,fieldY);
	if(droneToFieldDist<(fieldWidth/2-droneWidth/2))
	{
		pointBonus = round(map(droneToFieldDist,(fieldWidth/2-droneWidth/2),0,1,5))
		points+=pointBonus;
	}

	text("Points: "+points, textX, textY);
	text("Multiplier: "+pointBonus, textX, textY+16);
	
    }
