class Enemy extends Animation {
    
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
  
    show() {
        this.x = CANVAS_WIDTH;
    }
}