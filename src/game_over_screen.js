class GameOverScreen {
    
    
    constructor() {
        var self = this;
    }

    init() {
        this.btnReStart = createButton("RESTART");
        this.btnReStart.id = 'button-restart';
        this.btnReStart.addEventListener("click", function() {
            document.getElementById("button-restart").remove();
            currentScreen = introScreen;
            currentScreen.init();
            //init();
        });
        document.getElementById('container').appendChild(this.btnReStart);

    }        
    
    changeScreen() {
    }
    
    update(secondsPassed) { }

    draw(fps, secondsPassed) {
        context.drawImage(images.gameOver, CANVAS_WIDTH / 2 - images.gameOver.width / 2, 100);
    }
}