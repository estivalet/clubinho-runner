class Npc extends Animation {
    
    constructor(imagem, x, y, width, height, spriteWidth, spriteHeight, speed, frames){
        super(imagem, x, y, width, height, spriteWidth, spriteHeight, frames)
        this.y = CANVAS_HEIGHT - this.altura - this.variacaoY;
        this.speed = speed;
    }
  
    move(secondsPassed) {
        this.x = this.x - this.speed* secondsPassed * SPEED;
        if(this.x < -this.width){
            this.y = 200 + Math.floor((700 - 200) * Math.random());
            this.x = CANVAS_WIDTH;
        }
    }
}