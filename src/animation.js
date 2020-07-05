class Animation {

    constructor(image, x, variacaoY, width, height, spriteWidth, spriteHeight, frames) {
        this.image = image;
        this.width = width;
        this.height = height;
        this.x = x;
        this.variacaoY = variacaoY;
        this.y = CANVAS_HEIGHT - this.height - this.variacaoY;
        this.spriteWidth = spriteWidth;
        this.spriteHeight = spriteHeight;        
        this.frames = frames;
        this.frameSet;
        this.currentFrame = 0;
        
        this.cols = parseInt((this.image.width / this.spriteWidth));
        this.rows = parseInt((this.image.height / this.spriteHeight));  
        this.posX = 0;
        this.posY = 0;
    
        this.counter = 0;
        this.frameSpeed = 3;
    }
  
    draw(context, secondsPassed, filter) {
        this.posX = this.frameSet[this.currentFrame] % this.cols * this.spriteWidth;
        this.posY = Math.floor(this.frameSet[this.currentFrame] / this.cols) * this.spriteHeight;        
        
        if(filter) {
            var tmpCanvas = document.createElement('CANVAS');
            tmpCanvas.width = this.width;
            tmpCanvas.height = this.height;
            var tmpContext = tmpCanvas.getContext("2d");
            tmpContext.drawImage(this.image, this.posX, this.posY, this.spriteWidth, this.spriteHeight, 0,0, this.width, this.height);  
            var imageData = tmpContext.getImageData(0, 0, tmpCanvas.width, tmpCanvas.height);
            var data = imageData.data;
            var invert = function() {
                for (var i = 0; i < data.length; i += 4) {
                    data[i]     = 255 - data[i];     // red
                    data[i + 1] = 255 - data[i + 1]; // green
                    data[i + 2] = 255 - data[i + 2]; // blue
                }
                tmpContext.putImageData(imageData, 0, 0);
            };        
            invert();
            var tmpimg = new Image();
            tmpimg.src = tmpCanvas.toDataURL();
            context.drawImage(tmpimg, this.x, this.y);  
//            context.putImageData(imageData, this.x, this.y, 0, 0, tmpCanvas.width, tmpCanvas.height);  
        } else {
            context.drawImage(this.image, this.posX, this.posY, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);  
        }
        
/*        
        var tmpCanvas = document.getElementById('tmpCanvas');
        tmpCanvas.width = this.spriteWidth;
        tmpCanvas.height = this.spriteHeight;
        var tmpContext = tmpCanvas.getContext("2d");
        tmpContext.drawImage(this.image, this.posX, this.posY, this.spriteWidth, this.spriteHeight, 0,0, this.width, this.height);  
var imageData = tmpContext.getImageData(0, 0, canvas.width, canvas.height);
  var data = imageData.data;
    
  var invert = function() {
    for (var i = 0; i < data.length; i += 4) {
      data[i]     = 255 - data[i];     // red
      data[i + 1] = 255 - data[i + 1]; // green
      data[i + 2] = 255 - data[i + 2]; // blue
    }
    tmpContext.putImageData(imageData, 0, 0);
  };        
  var grayscale = function() {
    for (var i = 0; i < data.length; i += 4) {
      var avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
      data[i]     = avg; // red
      data[i + 1] = avg; // green
      data[i + 2] = avg; // blue
    }
    tmpContext.putImageData(imageData, 0, 0);
  };
  grayscale();
*/

        
        this.animate(secondsPassed);
    }
    
    
    animate(secondsPassed) {
        if (this.counter == (this.frameSpeed - 1)) {
            this.currentFrame++
//            if (this.currentFrame===((this.cols * this.rows)-1)){
            if (this.currentFrame===this.frameSet.length){
                this.currentFrame = 0;
            }
        }
        
        this.counter = (this.counter + 1) % this.frameSpeed;           

    }
}