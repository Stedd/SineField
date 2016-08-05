function setup() {
	width = 700;
	height = width/1.777777777778;
	createCanvas(width,height);
	background(125);
	
	//vector
	posX		= width/2;
	posY		= height/2;
	rectWidth	= 20;
	rectHeight	= 20;
	radius		= 75;
	speed		= 15;
	
	//Point field
	fieldX					= width/2;
	fieldY					= height/2;
	fieldWidth				= 75;
	fieldHeight				= 75;
	fieldAliveTime			= 0;	
	fieldaliveTimeTrigger	= 150;
	
    }

    function draw() {
	background(125);

	//Field Control
	// print("mouseX: "+mouseX +" mouseY: "+mouseY);
	if (fieldAliveTime <= fieldaliveTimeTrigger){
		fieldAliveTime++;
		fill(200);
		rect(fieldX, fieldY, fieldWidth, fieldHeight);
		
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
	rect(posX, posY, rectWidth, rectHeight);

    }
	
	// function pointField(fieldX,fieldY,fieldWidth,fieldHeight,aliveTime){
		
		
		
		
		// this.fieldX = random(this.fieldWidth/2, width-this.fieldWidth/2)
		// this.fieldY	= random(this.fieldheight/2, width-this.fieldheight/2)
		// fill(255);
		// rect(this.fieldX, this.fieldY, this.fieldWidth, this.fieldHeight);
	// }
	