class Player extends Animation {

    constructor(image, x, variacaoY, width, height, spriteWidth, spriteHeight, speed, frames, collisionRectAdj){
        super(image, x, variacaoY, width, height, spriteWidth, spriteHeight, frames);
        this.variacaoY = variacaoY;
        this.yInicial = CANVAS_HEIGHT - this.height - this.variacaoY;
        this.y = this.yInicial;

        this.speed = speed;
        this.gravity = 7;
        this.jumpVelocity = 0;
        this.jumpHeight = -50
        this.jumps = 0
        this.invincible = false
        
        this.blink =0 ;
        
        this.collisionRectAdj = collisionRectAdj;
    }
    
    
    draw(context, secondsPassed, filter) {
        super.draw(context, secondsPassed);
        
        if (this.invincible) {
            super.draw(context, secondsPassed, 1);
            if(++this.blink % 2 == 0) {
                super.draw(context, secondsPassed);    
            }
        }
    }
    
    jump() {
        if(this.jumps < 2) {
            this.jumpVelocity = this.jumpHeight
            this.jumps++;
            audios.jump.play();
        }
    }
  
    aplicaGravidade(secondsPassed) {
        this.y = this.y + this.jumpVelocity* secondsPassed * SPEED
        this.jumpVelocity = this.jumpVelocity + this.gravity* secondsPassed * SPEED

        if(this.y > this.yInicial) {
            this.y = this.yInicial
            this.jumps = 0
        }
    }
    
    increaseSpeed(amount) {
        this.speed += amount;
    }
  
    makeInvincible() {
        this.invincible = true
        setTimeout(() => {
            this.invincible = false
            this.blink = 0;
        }, 1000)
    }
  
    walk(direction, secondsPassed) {
        if (direction === 1) {
            this.frameSet = this.frames.right;
            if (this.x < CANVAS_WIDTH-this.width) {
                this.x += this.speed * secondsPassed * SPEED;
            }
        }
        else if (direction === 0) {
            this.frameSet = this.frames.left;
            if (this.x > 0) {
                this.x -= this.speed * secondsPassed * SPEED;
            }
        }
    }  
  
    collidesWith(enemy) {
        if(this.invincible) {
            return false;
        }

        const collision = collideRectRect(
                          this.x + this.collisionRectAdj[0], 
                          this.y + this.collisionRectAdj[1], 
                          this.width + this.collisionRectAdj[2],
                          this.height + this.collisionRectAdj[3],
                          enemy.x+enemy.collisionRectAdj[0],
                          enemy.y+enemy.collisionRectAdj[1],
                          enemy.width+enemy.collisionRectAdj[2],
                          enemy.height+enemy.collisionRectAdj[3],
        );
        /*
        context.beginPath();
        context.strokeStyle = "red";
        context.rect(this.x+this.collisionRectAdj[0], this.y+this.collisionRectAdj[1], this.width+this.collisionRectAdj[2], this.height+this.collisionRectAdj[3]);
        context.stroke();

        context.beginPath();
        context.strokeStyle = "blue";
        context.rect(enemy.x+enemy.collisionRectAdj[0], enemy.y+enemy.collisionRectAdj[1], enemy.width+enemy.collisionRectAdj[2] , enemy.height+enemy.collisionRectAdj[3]);
        context.stroke();
        */
        return collision;
    }

}