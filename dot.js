class Dot {
  constructor(graphic, tempRad, tempX, tempY, tempFrameR) {
    this.r = 255;
    this.g = 0;
    this.b = 0;
    // this is the dots size
    this.rad = tempRad || 50;
    // this is the span of the x axis in the canvas
    this.canvasX = tempX || 600;
    // this is the span of the y axis in the canvas
    this.canvasY = tempY || 600;
    // how quickly dots appear on the screen
    this.frameR = tempFrameR || 60;
    if (graphic) {
      createCanvas(this.getCX(), this.getCY(), WEBGL);
      this.graphic = graphic;
    } else {
      createCanvas(this.getCX(), this.getCY());
    }
    this.reset();
    createP("These are the JS sliders.");
    createP("This slider controls the size of the dots.");
    this.sliderSize = createSlider(5, 150, this.getRadius());
    createP("This slider controls the rate of appereance of the dots.");
    this.sliderFrameR = createSlider(1, 60, this.getFrameR());
  }

  // gets and sets //
  // all of these methods can be called in the console while the program is
  // running and have active effects on the graphic

  getRadius() {
    return this.rad;
  }
  setRadius(tempRad) {
    if (tempRad > 0) {
      this.rad = tempRad;
    } else {
      print("Invalid number used.");
    }
  }

  getCX() {
    return this.canvasX;
  }
  setCX(tempCanvasX) {
    if (tempCanvasX > 0) {
      this.canvasX = tempCanvasX;
    } else {
      print("Invalid number used.");
    }
  }

  getCY() {
    return this.canvasY;
  }
  setCY(tempCanvasY) {
    if (tempCanvasY > 0) {
      this.canvasY = tempCanvasY;
    } else {
      print("Invalid number used.");
    }
  }

  getFrameR() {
    return this.frameR;
  }
  setFrameR(tempFrameR) {
    if (tempFrameR > 0) {
      this.frameR = tempFrameR;
      frameRate(this.frameR);
    } else {
      print("Invalid number used.");
    }
  }

  getGraphic() {
    return this.graphic;
  }

  // methods for the graphic //
  // currnetly this draw mehtod is but one combination of the methods in this
  // class for how the dots appear on the canvas. Those other methods are
  // there for other functionallity if desired.
  draw(g) {
    if (this.getGraphic()) {
      g.noStroke();
      if (mouseIsPressed) {
        this.randomPlace(g, 255, 255, 255);
      } else {
        this.randomPlaceAndColour(g);
      }
    } else {
      if (mouseIsPressed) {
        this.certainPlaceAndColour(mouseX, mouseY, 255, 255, 255);
      } else {
        this.randomPlaceAndColour();
      }
    }

    // this.setRadius(document.getElementById("radius").value);
    // frameRate(document.getElementById("dotSpeed").value);
    this.setRadius(this.sliderSize.value());
    frameRate(this.sliderFrameR.value());
  }

  // starts over the graphic but doesnt reset the colour as it looks better
  reset() {
    background(51);
    noStroke();
    this.setRadius(this.getRadius());
    frameRate(this.getFrameR());
  }

  // this method changes the colour in such a way that it continues to cycle
  // smoothly and for infinity
  colourChange() {
    if (this.r == 255 && this.b == 0) {
      this.g++;
    }
    if (this.g == 255 && this.r != 0) {
      this.r--;
    }
    if (this.r == 0 && this.b != 255) {
      this.b++;
    }
    if (this.b == 255 && this.g != 0 && this.r == 0) {
      this.g--;
    }
    if (this.b == 255 && this.r != 255 && this.g == 0) {
      this.r++;
    }
    if (this.r == 255 && this.g == 0 && this.b != 0) {
      this.b--;
    }
  }

  // creates dots randomly on the page
  // the colours of these dots cycle
  randomPlaceAndColour(g) {
    this.colourChange();
    if (g) {
      g.fill(this.r, this.g, this.b);
      g.ellipse(random(this.getCX()), random(this.getCY()), this.getRadius());
    } else {
      fill(this.r, this.g, this.b);
      ellipse(random(this.getCX()), random(this.getCY()), this.getRadius());
    }
  }

  // creates dots randomly on the page
  // the colours of these dots don't cycle
  randomPlace(g, tempR, tempG, tempB) {
    if (g) {
      g.fill(tempR, tempG, tempB);
      g.ellipse(random(this.getCX()), random(this.getCY()), this.getRadius());
    } else {
      fill(tempR, tempG, tempB);
      ellipse(random(this.getCX()), random(this.getCY()), this.getRadius());
    }
  }

  // creates dots at a specific place
  // the colours of these dots cycle
  certainPlace(tempX, tempY) {
    this.colourChange();
    fill(this.r, this.g, this.b);
    ellipse(tempX, tempY, this.getRadius());
  }

  // creates dots at a specific place
  // the colours of these dots don't cycle
  certainPlaceAndColour(tempX, tempY, tempR, tempG, tempB) {
    fill(tempR, tempG, tempB);
    ellipse(tempX, tempY, this.getRadius());
  }
}
