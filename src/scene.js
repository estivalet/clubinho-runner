class Scene {
    
    constructor(image, speed, width, height) {
        this.image = image;
        this.speed = speed/50;
        this.x1 = 0;
        this.x2 = width;
        this.width = width;
        this.height = height;
    }
    
    draw(context, secondsPassed) {
        context.drawImage(this.image,this.x1,0,this.width+this.speed/**secondsPassed*/,this.height);
        context.drawImage(this.image,this.x2,0,this.width+this.speed/**secondsPassed*/,this.height);  
    }
    
    increaseSpeed(amount) {
        this.speed += amount;
    }
    
    move(secondsPassed) {
        this.x1 = this.x1-this.speed;//*secondsPassed;
        this.x2 = this.x2-this.speed;//*secondsPassed;
        if (this.x1 < -this.width ) {
            this.x1 = this.width;
        }
        if (this.x2 < -this.width ) {
            this.x2 = this.width;
        }
  }
}