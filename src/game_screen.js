class GameScreen {
    
    constructor() {
        this.enemyIndex = 0;
        
        this.goldStarTime = false;
        this.goldStar;
        this.numGoldStar = 0;
        
        this.heartTime = false;
        this.heart;
    }
    
    init() {
        this.enemyIndex = 0;
    }
    
    update(secondsPassed) {
        for(var i=0; i < cenarios.length; i++) {
            cenarios[i].move(secondsPassed);
        } 

        if(up) {
            up =false;
            player.jump();
        }
        if (left) {
            player.walk(0, secondsPassed);
        }
        if (right) {
            player.walk(1, secondsPassed);
        }

    }

    draw(fps, secondsPassed) {
        
        for(var i=0; i < cenarios.length-1; i++) {
            cenarios[i].draw(context, secondsPassed);
        } 

        player.draw(context, secondsPassed);
        player.aplicaGravidade(secondsPassed);

        npcs.map(function(npc) {
            npc.draw(context, secondsPassed);
            npc.move(secondsPassed);
        });    

    
        const currentEnemy = config.stages[currentStage].levels[currentLevel].enemys[this.enemyIndex]
        const enemy = enemys[currentEnemy.enemy];
        const inimigoVisivel = enemy.x < -enemy.width;
        enemy.velocidade = currentEnemy.velocidade;
        enemy.draw(context, secondsPassed);
        enemy.update(secondsPassed);
    
    
        if (inimigoVisivel) {
            this.enemyIndex++;
            enemy.show()
            if (this.enemyIndex > config.stages[currentStage].levels[currentLevel].enemys.length - 1) {
                this.enemyIndex = 0;
            }
        }
    
        cenarios[cenarios.length-1].draw(context, secondsPassed);

        if(this.goldStarTime) {
            this.goldStar.draw(context, secondsPassed);
            this.goldStar.update(secondsPassed);
            this.goldStarTime = this.goldStar.isVisible();
            if (player.collidesWith(this.goldStar)) {
                this.goldStarTime = false;
                this.numGoldStar++;
                audios.coin.play();
            }
        }

        if(this.heartTime) {
            this.heart.draw(context, secondsPassed);
            this.heart.update(secondsPassed);
            this.heartTime = this.heart.isVisible();
            if (player.collidesWith(this.heart)) {
                this.heartTime = false;
                audios.life.play();
                life.add();
            }
        }

        score.draw(context);
        let currentScore = score.add();
        if(parseInt(currentScore % 60) == 0) {
            if(!this.goldStarTime) {
                let s = config.assets.sprites["goldStar"];
                this.goldStar = new Bonus(images["goldStar"], s.name, s.x, s.y, s.width, s.height, s.spriteWidth, s.spriteHeight, s.speed, s.frames, s.collisionRectAdj)
                this.goldStar.frameSet = s.frames.left;
                this.goldStarTime = true;
            }
            /*
            for(var i=0; i < cenarios.length; i++) {
                cenarios[i].increaseSpeed(1);
            } 
            for(var i=0; i < config.stages[currentStage].levels[currentLevel].enemys.length; i++) {
                enemys[config.stages[currentStage].levels[currentLevel].enemys[i].enemy].increaseSpeed(0.05);
            } */
        }
        
        if(parseInt(currentScore % 150) == 0) {
            if(!this.heartTime) {
                let s = config.assets.sprites["heart"];
                this.heart = new Bonus(images["heart"], s.name, s.x, s.y, s.width, s.height, s.spriteWidth, s.spriteHeight, s.speed, s.frames, s.collisionRectAdj)
                this.heart.frameSet = s.frames.left;
                this.heartTime = true;
            }
        }
    
        if (player.collidesWith(enemy)) {
            if(health.subtract()) {
                if(life.subtract()) {
                    health.restore();
                } else {
                    currentScreen = gameOverScreen;
                    currentScreen.init();
                    audios.gameOver.play();
                }
            }
            player.makeInvincible();
            audios.impact.play();
            if (life.lifes === 0) {
            }
        }
    
        life.draw(context);
        health.draw(context);
        context.drawImage(images["coin"], 300, 0, 60, 60);
        context.beginPath();
        context.fillStyle = '#f0f0f0';
        context.font = '48px serif';
        context.fillText(parseInt(this.numGoldStar), 380, 45);
    }

}