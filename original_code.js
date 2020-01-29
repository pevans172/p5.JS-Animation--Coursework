// url link :  https://www.openprocessing.org/sketch/626625


int r = 255;
int g = 0;
int b = 0;
void setup() {
	size(1000,1000);
	background(0);
	noStroke();
}
void mp(){
	if(r==255 && b==0){g++;}
	if(g==255 && r!=0){r--;}
	if(r==0 && b!=255){b++;}
	if(b==255 && g!=0 && r==0){g--;}
	if(b==255 && r!=255 && g==0){r++;}
	if(r==255 && g==0 && b!=0){b--;}
}
void draw() {
	mp();
	fill(r,g,b);
	ellipse(random(500), random(500), 50, 50);
}
