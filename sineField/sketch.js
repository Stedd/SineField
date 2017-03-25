function setup() {
	//Setup canvas
	width 						= 700;
	height 						= width/1.777777777778;
	createCanvas			(width,height);
	background				(125);
	
	//Game variables
	points 						= 0;
	textX						= 20;
	textY							= 20;
	textSize					(16);
	droneToFieldDist		= 0;
	pointBonus				= 0;
	gameTime					= 0;
	gameTimeOffset		=	0;
	gameLength				= 10;
	gameRunning			=false;
	gameReset				=true;
	//Drone variables
	posX							= width/2;
	posY							= height/2;
	droneWidth				= 20;
	droneHeight				= 20;
	radius						= 75;
	millisFactor				= 0.00025;
	speed						= 15;
	
	//Point field variables
	fieldX						= width/2;
	fieldY						= height/2;
	fieldWidth					= 75;
	fieldHeight					= 75;
	fieldAliveTime			= 0;	
	fieldaliveTimeTrigger	= 150;
		
    }

	    function draw() 
	{
		background			(125);
		keyTyped();

		//Game time
		gameTime = round(millis()/1000) - gameTimeOffset;
		
		//Game state
		if(gameRunning)
		{
			if(gameTime<gameLength)
			{
				gameLoop();
			}
			else
			{
				textAlign				(CENTER);
				text("Final score: "+points, (width/2), height/2);
				text("Press 'R' to play again", (width/2), (height/2)+16);
			}
		}
		if(gameReset)
		{
			resetGame()
		}
	}
	
	function keyTyped() 
	{
		  if (key  === 'r')
		  {
				gameRunning = false;
				gameReset = true;
				gameTimeOffset		=	round(millis()/1000);
		  }
		return false;
	}
	
	function resetGame()
	{
		textAlign					(CENTER);
		textSize					(64);
		
		//Countdown
		if(gameTime < 3)
		{
			text(3-gameTime, (width/2), height/2);
		}
		//Reset stuff and start game
		else
		{
			textSize				(16);
			gameTimeOffset	= round(millis()/1000);
			points 					= 0;
			droneToFieldDist	= 0;
			pointBonus			= 0;
			fieldAliveTime		= 0;	
			gameRunning 		= true;
			gameReset 			= false;
		}
	}
		
	function gameLoop()
	{
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
	posX = (mouseX)+radius*cos(millis()*millisFactor*speed);
	posY = (mouseY)+radius*sin(millis()*millisFactor*speed);
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
	
	//Display Text
	textAlign					(LEFT);
	text("Time: "+(gameLength-gameTime),textX, textY);
	text("Points: "+points, textX, textY+16);
	text("Multiplier: "+pointBonus, textX, textY+32);
	
	}
	
