class StageScreen {
    
    
    constructor() {
        var self = this;

        this.stages = [];
        this.selectedStage = 0;
        for (let layer in config.assets.backgrounds) {
            this.stages.push(layer);
        }
    }

    init() {
        this.btnStart = createButton("PLAY!");
        this.btnStart.id = 'button-start';
        this.btnStart.addEventListener("click", function() {
            document.getElementById("button-start").remove();
            document.getElementById("button-next-stage").remove();
            document.getElementById("button-previous-stage").remove();
            /*
            hero=self.stages[self.selectedStage].name;
            for (let sprite in config.assets.sprites) {
                let s = config.assets.sprites[sprite];
                if(s.type === "player" && s.name === hero) {
                    player = new Stage(images[self.stages[self.selectedStage].name], s.x, s.y, s.width, s.height, s.spriteWidth, s.spriteHeight, s.speed, s.frames);
                    player.frameSet = s.frames.right;
                }
            }*/
            
            
            background = currentScreen.stages[currentScreen.selectedStage];
            loadStage(background);
        });
        document.getElementById('container').appendChild(this.btnStart);

        this.btnNextStage = createButton("");
        this.btnNextStage.id = 'button-next-stage';
        this.btnNextStage.addEventListener("click", function() {
            currentScreen.selectedStage++;
            if(currentScreen.selectedStage > currentScreen.stages.length - 1) {
                currentScreen.selectedStage = 0;
            }
        });
        document.getElementById('container').appendChild(this.btnNextStage);

        this.btnPreviousStage = createButton("");
        this.btnPreviousStage.id = 'button-previous-stage';
        this.btnPreviousStage.addEventListener("click", function() {
            currentScreen.selectedStage--;
            if(currentScreen.selectedStage < 0) {
                currentScreen.selectedStage = currentScreen.stages.length - 1;
            }
        });
        document.getElementById('container').appendChild(this.btnPreviousStage);
        
        
    }
    
    changeScreen() {
    }
    
    update(secondsPassed) { }

    draw(fps, secondsPassed) {
        context.drawImage(images.telaInicial,0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
        context.drawImage(images.border,CANVAS_WIDTH/2-100,CANVAS_HEIGHT/2-100,200,200);
        context.drawImage(images[this.stages[this.selectedStage]],0,0, CANVAS_WIDTH, CANVAS_HEIGHT);
        /*
        context.font = "60px Arial";
        context.fillStyle = "white";
        context.textAlign = "center";
        context.fillText(this.stages[this.selectedStage].description, CANVAS_WIDTH/2,CANVAS_HEIGHT/4);
        context.fillStyle = "red";
        context.fillText(this.stages[this.selectedStage].description, CANVAS_WIDTH/2-2,CANVAS_HEIGHT/4-2);
        */
    }
}