# Documentation for Dot class:
  - This documentation explains the file dot_class.js.
  - Only one class was used for the task as it was the simplest way and the original code is linked at the top of the html file and on the page.
  - The license used by the original is linked to on the page itself. The preset example is explained at the bottom and should show how this class is intended to be used.
  - This class uses p5js and so needs the p5 and p5.dom libraries to work.

### The constructor:
Here the parameters are:
* **graphic** - A boolean param that is true when a dot class instance will be used in a graphic canvas. Its deafault value is False.
* **tempRad** - A int param that will be the starting value for the radius of the dots. Its deafault value is 20.
* **tempX** - A int param that will be the size of the canvas in the X plane. Its deafault value is 600.
* **tempY** - A int param that will be the size of the canvas in the Y plane. Its deafault value is 600.
* **tempFrameR** -A int param that will be the initial frame rate of the canvas and thus control how quickly dots appear. Its deafault value is 60.

Now the if and else statements create a canvas accoridng to graphics value. If graphics is true then a canvas is created with WEBGL enabled, otherwise a normal canvas is created.

After canvas creation the reset function is called that further sets aspects of the dot class and its canvas (more detail on this function later).

Just after the reset function is executed, the sliders for frame rate and the dot radius are created along with some explanation text.

### The Methods:

#### Getters and Setters:
The Getters allow acces to see the values of each field of the class. They simply just return the value.

The field with just a getter is:
* this.garphic

The Set methods are just for the mutable fields and allow acces to change the variables. When these variables are changed while the sketch is running they give live updates. They also have checks in place so only valid integers are acceptable.

The fields with Getters and Setters are:
* this.rad
* this.canvasX
* this.canvasY
* this.frameR


#### Drawing methods:
Although the draw() method is first in the class below that exist the methods that allow for interesting variations of the sketch, which the draw function uses. There are:

* **reset()** - This mehtod is called in the construictor and can be called at any point during the sketch, when the non-WEBGL canvas is being used, to completely clear the canvas and restart the sketch. In this method the background method sets the background colour and the noStroke() method means so that the Dots have no borders.
* **colourChange()** - This method changes the Dot colour in such a way that it continues to cycle smoothly and for infinity.
* **randomPlaceAndColour(g)** - Creates dots randomly, the colours of these dots cycle to new ones using colourChange(). Has an optional p5.Renderer parameter, 'g',so it can be used with them.
* **randomPlace(g, tempR, tempG, tempB)** - Creates dots randomly, the colours of these dots is fixed and set using the digital colour code as the parameters. Has an optional p5.Renderer parameter, 'g',so it can be used with them.
* **certainPlace(tempX, tempY)** - Creates dots at a specific point, the colours of these dots cycle to new ones using colourChange().
* **certainPlaceAndColour(tempX, tempY, tempR, tempG, tempB)** - Creates dots at a specific point, the colours of these dots is fixed and set using the digital colour code as the parameters.

### The Draw() method:
This method creates the sketch. The sketch is customisable using the methods expalined above and so I will explain the current preset sketch made by the specific combo of methods chosen, because it was the best looking.
* ##### The sketch for the non-WEBGL canvas:
  - Dots randomly spawn on the canvas and their colours cycle smoothly and infinitely. The method used is the randomPlaceAndColour() from above.
  - If the mouse is pressed white dots will appear on the canvas at the specific spot that the mouse cursor is at on the canvas. The method used is the certainPlaceAndColour() from above.
  - Form controls on the page let the user change the size of the dots and how quickly the dots appear on the page in real time.
* ##### The sketch for the WEBGL canvas:
  - This sketch is enabled when a p5.Renderer is passed to the draw method as a parameter and when the Dot class instance has been initialised with WEBGL.
  - The sketch on the graphic canvas is exactly the saem as above but with the exception that when the mouse is pressed, white dots spawn randomly on the graphic canvas rather than exactly where the mouse cursor is.

# The Example Explained:
The above documentation explains all aspects of the Dot class in the dot_class.js file, this section will explain what is written in the the index.js file.

* Firstly a variable 'd' is made.
* Then the p5js setup method is called where inside, 'd' is made a dot class instance with no parameters given and so the default values in the class are used.
* Next the p5js draw method is called and inside, the draw() method for 'd' is called with no parameters.
* The end result is the sketch explained in the 'sketch for the non-WEBGL canvas' section above.
* The homepage file contains the url to the original code at the top and the license used by the original is linked as a button in the html body.
* #### Extra
  - An example of how the sketch looks with a WEBGL canvas and as a texture using the optional p5.Renderer in the draw() method is below the code in one large comment.
  - To view this just uncomment the code that's commented and then comment the code before that wasnt commented.
  - Then just save the file and reload the webpage on the browser.

