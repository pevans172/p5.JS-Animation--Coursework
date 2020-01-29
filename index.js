let d;

function setup() {
  d = new Dot();
}

function draw() {
  d.draw();

  // var size_slider = document.getElementById("radius");
  // // Update the current slider value (each time you drag the slider handle)
  // size_slider.oninput = function() {
  //   d.setRadius(size_slider.value);
  // };

  // var frame_slider = document.getElementById("dotSpeed");
  // // Update the current slider value (each time you drag the slider handle)
  // frame_slider.oninput = function() {
  //   console.log(frame_slider.value);
  //   frameRate(frame_slider.value);
  // };
}

// let d;
// let g;
// function setup() {
//   d = new Dot(true);
//   g = createGraphics(600, 600);
// }
// function draw() {
//   d.draw(g);
//   texture(g);
//   background(0);
//   rotateX(frameCount * 0.01);
//   rotateY(frameCount * 0.01);
//   box(150);
// }
