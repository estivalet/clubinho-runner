class Score {
    constructor() {
        this.points = 0
    }
  
    draw(context) {
        context.beginPath();
        context.fillStyle = '#f0f0f0';
        context.font = '48px serif';
        context.fillText(parseInt(this.points), CANVAS_WIDTH - 120, 50);
    }
  
    add() {
        this.points = this.points + 0.2;
        return this.points;
    }
}