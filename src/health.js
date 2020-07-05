class Health {

    constructor() {
        this.health = 100;
        this.maxHealth = 100;
        this.rectWidth = (CANVAS_HEIGHT / 10) * 4;
        this.drawWidth;
        this.inicialY = CANVAS_HEIGHT / 8;
    }

    draw(context) {
        context.beginPath();
        context.strokeStyle = '#000';
        if (this.health < 25) {
            context.fillStyle = '#ff0000';
        } else if (this.health < 50) {
            context.fillStyle = '#ffff00';
        } else {
            context.fillStyle = '#00ff00';
        }
        this.drawWidth = (this.health / this.maxHealth) * this.rectWidth;
        // Get fraction 0->1 and multiply it by width of bar
        context.rect(20, this.inicialY / 1.2, this.drawWidth, CANVAS_HEIGHT / 20);
        context.fill();
        context.rect(20, this.inicialY / 1.2, this.rectWidth, CANVAS_HEIGHT / 20);
        context.stroke();
    }

    subtract() {
        this.health -= 50;
        return (this.health <= 0) ? true : false;
    }
    
    restore() {
        this.health = 100;
    }

    add() {
        this.health <= 80 ? (this.health += 10) : null;
    }
}
