class Bonus extends Animation {
    
    constructor(image, name, x, y, width, height, spriteWidth, spriteHeight, speed, frames, collisionRectAdj) {
        super(image, x, y, width, height, spriteWidth, spriteHeight, frames)
        this.name = name;
        this.speed = speed
        this.x = CANVAS_WIDTH;
        this.collisionRectAdj = collisionRectAdj;
    }
  
    update(secondsPassed) {
        this.x = this.x - this.speed * secondsPassed * SPEED;
    }
  
    increaseSpeed(amount) {
        this.speed += amount;
    }
    
    isVisible() {
        return this.x + this.width > 0;
    }
  
    show() {
        this.x = CANVAS_WIDTH;
    }
}