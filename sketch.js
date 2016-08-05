function setup() {
	width = 1300;
	height = width/1.777777777778;
	createCanvas(width,height);
	background(125);
	
	//vector
	posX		= width/2;
	posY		= height/2;
	rectWidth	= 20;
	rectHeight	= 20;
	amplitude	= 150;
	speed		= 20;
	
	//Point field
	// fieldX		= 0;
	// fieldY		= 0;
	// fieldWidth	= 75;
	// fieldHeight	= 75;
	// aliveTime	= 2000;
	
	field = new pointField();
	
    }

    function draw() {
	background(125);
	poin.update();
	poin.show();
	// posX = (width/2)+amplitude*cos(frameCount*speed);
	// posY = (height/2)+amplitude*sin(frameCount*speed);
	
	posX = (mouseX)+amplitude*cos(millis()*0.00025*speed);
	posY = (mouseY)+amplitude*sin(millis()*0.00025*speed);
	
	rect(posX, posY, rectWidth, rectHeight);
    }
	
	function pointField(fieldX,fieldY,fieldWidth,fieldHeight,aliveTime){
		
		
		
		
		// this.fieldX = random(this.fieldWidth/2, width-this.fieldWidth/2)
		// this.fieldY	= random(this.fieldheight/2, width-this.fieldheight/2)
		fill(255);
		rect(this.fieldX, this.fieldY, this.fieldWidth, this.fieldHeight);
	}
	