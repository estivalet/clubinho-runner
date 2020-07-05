class GameScreen {
    
    constructor() {
        this.enemyIndex = 0;
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
        enemy.draw(context, secondsPassed)
        enemy.update(secondsPassed)
    
    
        if (inimigoVisivel) {
            this.enemyIndex++;
            enemy.show()
            if (this.enemyIndex > config.stages[currentStage].levels[currentLevel].enemys.length - 1) {
                this.enemyIndex = 0;
            }
        }
    
        cenarios[cenarios.length-1].draw(context, secondsPassed);


        score.draw(context);
        if(parseInt(score.add() % 10) == 0) {
            /*
            for(var i=0; i < cenarios.length; i++) {
                cenarios[i].increaseSpeed(1);
            } 
            for(var i=0; i < config.stages[currentStage].levels[currentLevel].enemys.length; i++) {
                enemys[config.stages[currentStage].levels[currentLevel].enemys[i].enemy].increaseSpeed(0.05);
            } */
        }
    
        if (player.collidesWith(enemy)) {
            if(health.subtract()) {
                if(life.subtract()) {
                    health.restore();
                } else {
                 //   currentScreen = gameOverScreen;
                 //   currentScreen.init();
                 //   audios.gameOver.play();
                }
            }
            player.makeInvincible();
            audios.impact.play();
            if (life.lifes === 0) {
            }
        }
    
        life.draw(context);
        health.draw(context);
    }

}