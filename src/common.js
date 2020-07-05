function collideRectRect(x, y, w, h, x2, y2, w2, h2) {
  //2d
  //add in a thing to detect rectMode CENTER
  if (x + w >= x2 &&    // r1 right edge past r2 left
      x <= x2 + w2 &&    // r1 left edge past r2 right
      y + h >= y2 &&    // r1 top edge past r2 bottom
      y <= y2 + h2) {    // r1 bottom edge past r2 top
        return true;
  }
  return false;
};    



function createButton (label, value) {
            var elt = document.createElement('button');
            elt.innerHTML = label;
            if (value) elt.value = value;
            return elt;
  };

 function drawImage(img, x, y, width, height, deg, flip, flop, center) {

context.save();
let flipScale;
let flopScale;
if(typeof width === "undefined") width = img.width;
if(typeof height === "undefined") height = img.height;
if(typeof center === "undefined") center = false;

// Set rotation point to center of image, instead of top/left
if(center) {
    x -= width/2;
    y -= height/2;
}

// Set the origin to the center of the image
context.translate(x + width/2, y + height/2);

// Rotate the canvas around the origin
var rad = 2 * Math.PI - deg * Math.PI / 180;    
context.rotate(rad);

// Flip/flop the canvas
if(flip) flipScale = -1; else flipScale = 1;
if(flop) flopScale = -1; else flopScale = 1;
context.scale(flipScale, flopScale);

// Draw the image    
context.drawImage(img, -width/2, -height/2, width, height);

context.restore();
}   


