class Life {
    constructor(image, total, initial) {
        this.image = image;
        this.total = total
        this.initial = initial
        this.lifes = this.initial
   
        this.width = 25
        this.height = 25
        this.x = 20
        this.y = 20
    }
  
    draw(context) {
        for(let i = 0; i < this.lifes; i++) {
            const margin = i * 10
            const position = this.x * (i + 1)
            context.drawImage(this.image, position + margin, this.y, this.width, this.height);
        }
    }
  
    add() {
        if(this.lifes <= this.total) {
            this.lifes++;
        }
    }
  
    subtract() {
        this.lifes--;
        return this.lifes != 0;
    }
}