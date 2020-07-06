class IntroScreen {
    
    
    constructor() {
        var self = this;

        this.players = [];
        this.selectedPlayer = 0;
        for (let sprite in config.assets.sprites) {
            let s = config.assets.sprites[sprite];
            if(s.type === "player") {
                this.players.push(s);
            }
        }
        
    }

    init() {
        
        this.btnStart = createButton("CHOOSE STAGE");
        this.btnStart.id = 'button-choose-stage';
        this.btnStart.addEventListener("click", function() {
            hero=currentScreen.players[currentScreen.selectedPlayer].name;
            document.getElementById("button-choose-stage").remove();
            document.getElementById("button-next-player").remove();
            document.getElementById("button-previous-player").remove();
            /*
            for (let sprite in config.assets.sprites) {
                let s = config.assets.sprites[sprite];
                if(s.type === "player" && s.name === hero) {
                    player = new Player(images[currentScreen.players[currentScreen.selectedPlayer].name], s.x, s.y, s.width, s.height, s.spriteWidth, s.spriteHeight, s.speed, s.frames);
                    player.frameSet = s.frames.right;
                }
            }*/
            
            currentScreen = stageScreen;
            currentScreen.init();
    
            //currentScreen = gameScreen;
        });
        document.getElementById('container').appendChild(this.btnStart);

        this.btnNextPlayer = createButton("");
        this.btnNextPlayer.id = 'button-next-player';
        this.btnNextPlayer.addEventListener("click", function() {
            currentScreen.selectedPlayer++;
            if(currentScreen.selectedPlayer > currentScreen.players.length - 1) {
                currentScreen.selectedPlayer = 0;
            }
        });
        document.getElementById('container').appendChild(this.btnNextPlayer);

        this.btnPreviousPlayer = createButton("");
        this.btnPreviousPlayer.id = 'button-previous-player';
        this.btnPreviousPlayer.addEventListener("click", function() {
            currentScreen.selectedPlayer--;
            if(currentScreen.selectedPlayer < 0) {
                currentScreen.selectedPlayer = currentScreen.players.length - 1;
            }
        });
        document.getElementById('container').appendChild(this.btnPreviousPlayer);
    }        
    
    changeScreen() {
    }
    
    update(secondsPassed) { }

    draw(fps, secondsPassed) {
        context.drawImage(images.telaInicial,0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
        context.drawImage(images.border,CANVAS_WIDTH/2-100,CANVAS_HEIGHT/2-100,200,200);
        context.drawImage(images[this.players[this.selectedPlayer].name],0,0,this.players[this.selectedPlayer].spriteWidth,this.players[this.selectedPlayer].spriteHeight,CANVAS_WIDTH/2-this.players[this.selectedPlayer].width/2,CANVAS_HEIGHT/2-this.players[this.selectedPlayer].height/2,this.players[this.selectedPlayer].width,this.players[this.selectedPlayer].height);
        context.font = "30px Arial";
        context.textAlign = "center";
        context.fillStyle = "#000";
        context.fillText(this.players[this.selectedPlayer].description, CANVAS_WIDTH/2,CANVAS_HEIGHT/3.5);
    }
}