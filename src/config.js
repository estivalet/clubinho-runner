const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 480;

let config = {
    "assets": {
        "sounds" : {
            "coin": '../assets/sound/coin.wav',  
            "jump": '../assets/sound/jump.mp3',  
            "impact": '../assets/sound/impact_2.mp3',  
            "life": '../assets/sound/life.wav',  
            "music": '../assets/sound/music.mp3',  
            "gameOver": '../assets/sound/game-over-sound-effect.mp3',
        },
        "sprites": {
            "lucas": {
                "name": "lucas",
                "description": "Lucas the Cat",
                "image": '../assets/sprites/lucas.png',
                "x": 0,
                "y": 30,
                "width": 256,
                "height": 200,
                "spriteWidth": 1084,
                "spriteHeight": 948 ,
                "type": "player",
                "frames": {
                    "right": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                    "left": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                },
                "collisionRectAdj": [80, 40, -180, -50],
             },
            "leo": {
                "name": "leo",
                "description": "Leo the Hero",
                "image": '../assets/sprites/leo.png',
                "x": 0,
                "y": 30,
                "width": 160,
                "height": 185,
                "spriteWidth": 416,
                "spriteHeight": 507,
                "type": "player",
                "frames": {
                    "right": [0, 1, 2, 3, 4, 5, 6, 7,8,9],
                    "left": [0, 1, 2, 3, 4, 5, 6, 7,8,9],
                },
                "collisionRectAdj": [40, 20, -90, -40],
             },
            "cat": {
                "name": "cat",
                "description": "cat",
                "image": '../assets/sprites/cat.png',
                "x": 0,
                "y": 30,
                "width": 128,
                "height": 128,
                "spriteWidth": 542,
                "spriteHeight": 474 ,
                "type": "player",
                "frames": {
                    "right": [0, 1, 2, 3, 4, 5, 6, 7, 8],
                    "left": [0, 1, 2, 3, 4, 5, 6, 7, 8],
                },
                "collisionRectAdj": [30, 20, -70, -30],
             },
            "dog": {
                "name": "dog",
                "description": "Dog",
                "image": '../assets/sprites/dog.png',
                "x": 0,
                "y": 30,
                "width": 128,
                "height": 128,
                "spriteWidth": 547,
                "spriteHeight": 481 ,
                "type": "player",
                "frames": {
                    "right": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                    "left": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                },
                "collisionRectAdj": [30, 20, -70, -30],
             },
            "knight": {
                "name": "knight",
                "description": "Knight Lucas",
                "image": '../assets/sprites/knight.png',
                "x": 0,
                "y": 30,
                "width": 110,
                "height": 135,
                "spriteWidth": 587,
                "spriteHeight": 707,
                "type": "player",
                "frames": {
                    "right": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                    "left": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                },
                "collisionRectAdj": [30, 20, -70, -30],
             },
            "ninja": {
                "name": "ninja",
                "description": "Ninja Leo",
                "image": '../assets/sprites/ninja.png',
                "x": 0,
                "y": 30,
                "width": 110,
                "height": 135,
                "spriteWidth": 365,
                "spriteHeight": 458,
                "type": "player",
                "frames": {
                    "right": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                    "left": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                },
                "collisionRectAdj": [30, 20, -40, -30],
             },
            "robot": {
                "name": "robot",
                "description": "Robot",
                "image": '../assets/sprites/robot.png',
                "x": 0,
                "y": 30,
                "width": 128,
                "height": 128,
                "spriteWidth": 567,
                "spriteHeight": 566 ,
                "type": "player",
                "frames": {
                    "right": [0, 1, 2, 3, 4, 5, 6, 7],
                    "left": [0, 1, 2, 3, 4, 5, 6, 7],
                },
                "collisionRectAdj": [40, 20, -80, -30],
             },
            "girl": {
                "name": "girl",
                "description": "Girl",
                "image": '../assets/sprites/girl.png',
                "x": 0,
                "y": 30,
                "width": 128,
                "height": 128,
                "spriteWidth": 128,
                "spriteHeight": 128 ,
                "type": "player",
                "frames": {
                    "right": [0, 1, 2, 3],
                    "left": [0, 1, 2, 3],
                },
                "collisionRectAdj": [40, 20, -60, -30],
             },
            "girl2": {
                "name": "girl2",
                "description": "Girl Red Hair",
                "image": '../assets/sprites/girl2.png',
                "x": 0,
                "y": 30,
                "width": 110,
                "height": 135,
                "spriteWidth": 416,
                "spriteHeight": 454 ,
                "type": "player",
                "frames": {
                    "right": [0, 1, 2, 3, 4, 5, 6, 7,8,9,10,11,12,13,14,15,16,17,18,19],
                    "left": [0, 1, 2, 3, 4, 5, 6, 7,8,9,10,11,12,13,14,15,16,17,18,19],
                },
                "collisionRectAdj": [30, 20, -50, -20],
             },
            "girl3": {
                "name": "girl3",
                "description": "Girl 3",
                "image": '../assets/sprites/girl3.png',
                "x": 0,
                "y": 30,
                "width": 170,
                "height": 185,
                "spriteWidth": 641,
                "spriteHeight": 542,
                "type": "player",
                "frames": {
                    "right": [0, 1, 2, 3, 4, 5, 6,7],
                    "left": [0, 1, 2, 3, 4, 5, 6,7],
                },
                "collisionRectAdj": [50, 20, -100, -30],
             },
            "ninjagirl": {
                "name": "ninjagirl",
                "description": "Ninja Girl",
                "image": '../assets/sprites/ninjagirl.png',
                "x": 0,
                "y": 30,
                "width": 110,
                "height": 135,
                "spriteWidth": 376,
                "spriteHeight": 520,
                "type": "player",
                "frames": {
                    "right": [0, 1, 2, 3, 4, 5, 6,7,8,9],
                    "left": [0, 1, 2, 3, 4, 5, 6,7,8,9],
                },
                "collisionRectAdj": [30, 20, -50, -30],
             },
            "boy": {
                "name": "boy",
                "description": "Boy",
                "image": '../assets/sprites/boy.png',
                "x": 0,
                "y": 30,
                "width": 150,
                "height": 175,
                "spriteWidth": 616,
                "spriteHeight": 564,
                "type": "player",
                "frames": {
                    "right": [0, 1, 2, 3, 4, 5, 6, 7,8,9,10,11,12,13,14],
                    "left": [0, 1, 2, 3, 4, 5, 6, 7,8,9,10,11,12,13,14],
                },
                "collisionRectAdj": [20, 30, -100, -50],
             },
            "cowboy": {
                "name": "cowboy",
                "description": "Cowboy Lucas",
                "image": '../assets/sprites/cowboy.png',
                "x": 0,
                "y": 30,
                "width": 110,
                "height": 135,
                "spriteWidth": 416,
                "spriteHeight": 507,
                "type": "player",
                "frames": {
                    "right": [0, 1, 2, 3, 4, 5, 6, 7,8,9],
                    "left": [0, 1, 2, 3, 4, 5, 6, 7,8,9],
                },
                "collisionRectAdj": [30, 20, -50, -30],
             },
            "jack": {
                "name": "jack",
                "description": "Jack-o-Lucas",
                "image": '../assets/sprites/jack.png',
                "x": 0,
                "y": 30,
                "width": 110,
                "height": 135,
                "spriteWidth": 579,
                "spriteHeight": 763,
                "type": "player",
                "frames": {
                    "right": [0, 1, 2, 3, 4, 5, 6, 7,8,9],
                    "left": [0, 1, 2, 3, 4, 5, 6, 7,8,9],
                },
                "collisionRectAdj": [20, 20, -50, -30],
             },
            "witch": {
                "name": "witch",
                "description": "Witch",
                "image": '../assets/sprites/witch2.png',
                "x": 0,
                "y": 30,
                "width": 110,
                "height": 135,
                "spriteWidth": 220,
                "spriteHeight": 270,
                "type": "player",
                "frames": {
                    "right": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
                    "left": [19, 18, 17, 16, 23, 22, 21, 20, 27, 26, 25, 24, 31, 30, 29, 28],
                },
                "collisionRectAdj": [20, 20, -50, -30],
             },
            "bat": {
                "name": "bat",
                "image": '../assets/sprites/morcego.png',
                "x": CANVAS_WIDTH,
                "y": 200,
                "width": 237,
                "height": 210,
                "spriteWidth": 534,
                "spriteHeight": 419,
                "speed": 15,
                "type": "enemy",
                "frames": {
                    "left": [0, 1, 2, 3, 4, 5, 6, 7],
                },
                "collisionRectAdj": [50, 50, -100, -120],
            },
            "bat2": {
                "name": "bat2",
                "image": '../assets/sprites/bat2.png',
                "x": CANVAS_WIDTH,
                "y": 200,
                "width": 165,
                "height": 145,
                "spriteWidth": 165,
                "spriteHeight": 145,
                "speed": 15,
                "type": "enemy",
                "frames": {
                    "left": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                },
                "collisionRectAdj": [20, 20, -70, -50],
            },
            "bat3": {
                "name": "bat3",
                "image": '../assets/sprites/bat.png',
                "x": CANVAS_WIDTH,
                "y": 200,
                "width": 293,
                "height": 212,
                "spriteWidth": 293,
                "spriteHeight": 212,
                "speed": 12,
                "type": "enemy",
                "frames": {
                    "left": [0, 1, 2, 3, 4, 5, 6],
                },
                "collisionRectAdj": [50, 50, -100, -90],
            },
            "bee": {
                "name": "bee",
                "image": '../assets/sprites/bee.png',
                "x": CANVAS_WIDTH,
                "y": 0,
                "width": 200,
                "height": 200,
                "spriteWidth": 400,
                "spriteHeight": 400,
                "speed": 10,
                "type": "npc",
                "frames": {
                    "left": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                }
            },
            "fish": {
                "name": "fish",
                "image": '../assets/sprites/fish.png',
                "x": CANVAS_WIDTH,
                "y": 0,
                "width": 256,
                "height": 256,
                "spriteWidth": 256,
                "spriteHeight": 256,
                "speed": 10,
                "type": "enemy",
                "frames": {
                    "left": [0, 1, 2, 3, 4, 5],
                },
                "collisionRectAdj": [0, 0, 0, 0],
            },
            "ghost": {
                "name": "ghost",
                "image": '../assets/sprites/ghost.png',
                "x": CANVAS_WIDTH,
                "y": 200,
                "width": 117,
                "height": 59,
                "spriteWidth": 234,
                "spriteHeight": 118,
                "speed": 12,
                "type": "enemy",
                "frames": {
                    "left": [0, 1, 2, 3],
                },
                "collisionRectAdj": [0, 0, 0, 0],
            },
            "golem": {
                "name": "golem",
                "image": '../assets/sprites/golem.png',
                "x": CANVAS_WIDTH - 52,
                "y": 30,
                "width": 360,
                "height": 240,
                "spriteWidth": 720,
                "spriteHeight": 480,
                "speed": 10,
                "type": "enemy",
                "frames": {
                    "left": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                },
                "collisionRectAdj": [100, 60, -230, -80],
            },
            "droplet": {
                "name": "droplet",
                "image": '../assets/sprites/droplet.png',
                "x": CANVAS_WIDTH - 52,
                "y": 30,
                "width": 52,
                "height": 50,
                "spriteWidth": 104,
                "spriteHeight": 100,
                "speed": 10,
                "type": "enemy",
                "frames": {
                    "left": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19 ,20, 21, 22, 23, 24, 25, 26, 27],
                },
                "collisionRectAdj": [0, 0, 0, 0],
            },
            "flyingDroplet": {
                "name": "flyingDroplet",
                "image": '../assets/sprites/flying-droplet.png',
                "x": CANVAS_WIDTH - 52,
                "y": 200,
                "width": 100,
                "height": 75,
                "spriteWidth": 200,
                "spriteHeight": 150,
                "speed": 10,
                "type": "enemy",
                "frames": {
                    "left": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                },
                "collisionRectAdj": [20, 20, -40, -40],
            },
            "jack2": {
                "name": "jack2",
                "image": '../assets/sprites/jack2.png',
                "x": CANVAS_WIDTH,
                "y": 25,
                "width": 176,
                "height": 176,
                "spriteWidth": 176,
                "spriteHeight": 176,
                "speed": 12,
                "type": "enemy",
                "frames": {
                    "left": [0, 1, 2, 3, 4, 5, 6, 7],
                },
                "collisionRectAdj": [50, 30, -80, -40],
            },
            "mummy": {
                "name": "mummy",
                "image": '../assets/sprites/mummy.png',
                "x": CANVAS_WIDTH,
                "y": 25,
                "width": 175,
                "height": 225,
                "spriteWidth": 349,
                "spriteHeight": 549,
                "speed": 12,
                "type": "enemy",
                "frames": {
                    "left": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
                },
                "collisionRectAdj": [30, 30, -50, -50],
            },
            "orc": {
                "name": "orc",
                "image": '../assets/sprites/orc.png',
                "x": CANVAS_WIDTH,
                "y": 0,
                "width": 200,
                "height": 200,
                "spriteWidth": 400,
                "spriteHeight": 400,
                "speed": 10,
                "type": "enemy",
                "frames": {
                    "left": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19 ,20, 21, 22, 23],
                },
                "collisionRectAdj": [60, 30, -100, -50],
            },
            "shark": {
                "name": "shark",
                "image": '../assets/sprites/shark.png',
                "x": CANVAS_WIDTH,
                "y": 0,
                "width": 400,
                "height": 172,
                "spriteWidth": 800,
                "spriteHeight": 335,
                "speed": 15,
                "type": "enemy",
                "frames": {
                    "left": [0, 1, 2, 3, 4, 5, 6, 7],
                },
                "collisionRectAdj": [0, 0, 0, 0],
            },
            "skeleton": {
                "name": "skeleton",
                "image": '../assets/sprites/skeleton.png',
                "x": CANVAS_WIDTH,
                "y": 0,
                "width": 176,
                "height": 242,
                "spriteWidth": 88,
                "spriteHeight": 121,
                "speed": 15,
                "type": "enemy",
                "frames": {
                    "left": [0, 1, 2, 3],
                },
                "collisionRectAdj": [50, 0, -80, -30],
            },
            "troll": {
                "name": "troll",
                "image": '../assets/sprites/troll.png',
                "x": CANVAS_WIDTH,
                "y": 0,
                "width": 200,
                "height": 200,
                "spriteWidth": 400,
                "spriteHeight": 400,
                "speed": 15,
                "type": "enemy",
                "frames": {
                    "left": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19 ,20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
                },
                "collisionRectAdj": [70, 40, -90, -60],
            },
            "troll2": {
                "name": "troll2",
                "image": '../assets/sprites/troll2.png',
                "x": CANVAS_WIDTH,
                "y": 0,
                "width": 411,
                "height": 277,
                "spriteWidth": 822,
                "spriteHeight": 557,
                "speed": 12,
                "type": "enemy",
                "frames": {
                    "left": [0, 1, 2, 3, 4, 5, 6],
                },
                "collisionRectAdj": [110, 30, -180, -60],
            },
            "zumbi": {
                "name": "zumbi",
                "image": '../assets/sprites/zumbi.png',
                "x": CANVAS_WIDTH,
                "y": 0,
                "width": 215,
                "height": 260,
                "spriteWidth": 430,
                "spriteHeight": 519,
                "speed": 10,
                "type": "enemy",
                "frames": {
                    "left": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                },
                "collisionRectAdj": [50, 40, -100, -50],
            },
 
            "zumboa": {
                "name": "zumboa",
                "image": '../assets/sprites/zumboa.png',
                "x": CANVAS_WIDTH,
                "y": 0,
                "width": 260,
                "height": 288,
                "spriteWidth": 521,
                "spriteHeight": 576,
                "speed": 10,
                "type": "enemy",
                "frames": {
                    "left": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                },
                "collisionRectAdj": [60, 40, -140, -50],
            },
            "goldStar": {
                "name": "goldStar",
                "image": '../assets/items/gold_star_sprite.png',
                "x": 200,
                "y": 310,
                "width": 60,
                "height": 60,
                "spriteWidth": 120,
                "spriteHeight": 120,
                "speed": 10,
                "type": "bonus",
                "frames": {
                    "left": [0, 1, 2, 3, 4, 5],
                },
                "collisionRectAdj": [0, 0, 0, 0],
            },
            "heart": {
                "name": "heart",
                "image": '../assets/images/heart.png',
                "x": 200,
                "y": 290,
                "width": 60,
                "height": 40,
                "spriteWidth": 200,
                "spriteHeight": 167,
                "speed": 20,
                "type": "bonus",
                "frames": {
                    "left": [0],
                },
                "collisionRectAdj": [0, 0, 0, 0],
            },
            
        },
        "images": {
            "heart": {
                "image": '../assets/images/heart.png',
            },
            "coin": {
                "image": '../assets/images/coin.png',
            },
            "border": {
                "image": '../assets/images/border.png',
            },
            "telaInicial": {
                "image": '../assets/images/telaInicial.png',
            },
            "beach": {
                "image": '../assets/images/beach.png',
            },
            "beach2": {
                "image": '../assets/images/beach2.png',
            },
            "beach3": {
                "image": '../assets/images/beach3.png',
            },
            "castle": {
                "image": '../assets/images/castle.png',
            },
            "city": {
                "image": '../assets/images/city.png',
            },
            "city2": {
                "image": '../assets/images/city2.png',
            },
            "dungeon1": {
                "image": '../assets/images/dungeon1.png',
            },
            "dungeon2": {
                "image": '../assets/images/dungeon2.png',
            },
            "forest1": {
                "image": '../assets/images/forest1.png',
            },
            "forest2": {
                "image": '../assets/images/forest2.png',
            },
            "forest3": {
                "image": '../assets/images/forest3.png',
            },
            "forest4": {
                "image": '../assets/images/forest4.png',
            },
            "forest5": {
                "image": '../assets/images/forest5.png',
            },
            "forest6": {
                "image": '../assets/images/forest6.png',
            },
            "forest7": {
                "image": '../assets/images/forest7.png',
            },
            "forest8": {
                "image": '../assets/images/forest8.png',
            },
            "forest9": {
                "image": '../assets/images/forest9.png',
            },
            "forest10": {
                "image": '../assets/images/forest10.png',
            },
            "forest11": {
                "image": '../assets/images/forest11.png',
            },
            "forest12": {
                "image": '../assets/images/forest12.png',
            },
            "halloween": {
                "image": '../assets/images/halloween.png',
            },
            "halloween2": {
                "image": '../assets/images/halloween2.png',
            },
            "halloween3": {
                "image": '../assets/images/halloween3.png',
            },
            "halloween4": {
                "image": '../assets/images/halloween4.png',
            },
            "hills": {
                "image": '../assets/images/hills.png',
            },
            "ocean": {
                "image": '../assets/images/ocean.png',
            },
            "gameOver": {
                "image": '../assets/images/game-over.png',
            },
        },
        "backgrounds": {
            "forest1": {
                "layer1": {
                    "image": '../assets/backgrounds/forest1/1.png',
                    "speed": 2
                },
                "layer2": {
                    "image": '../assets/backgrounds/forest1/2.png',
                    "speed": 3
                },
                "layer3": {
                    "image": '../assets/backgrounds/forest1/3.png',
                    "speed": 4
                },
                "layer4":{
                    "image": '../assets/backgrounds/forest1/4.png',
                    "speed": 6
                },
                "layer5":{
                    "image": '../assets/backgrounds/forest1/5.png',
                    "speed": 8
                },
            },
            "forest2": {
                "layer1": {
                    "image": '../assets/backgrounds/forest2/1.png',
                    "speed": 2
                },
                "layer2": {
                    "image": '../assets/backgrounds/forest2/2.png',
                    "speed": 2
                },
                "layer3": {
                    "image": '../assets/backgrounds/forest2/3.png',
                    "speed": 4
                },
                "layer4":{
                    "image": '../assets/backgrounds/forest2/4.png',
                    "speed": 6
                },
                "layer5":{
                    "image": '../assets/backgrounds/forest2/5.png',
                    "speed": 8
                },
            },
            "forest3": {
                "layer1": {
                    "image": '../assets/backgrounds/forest3/1.png',
                    "speed": 2
                },
                "layer2": {
                    "image": '../assets/backgrounds/forest3/2.png',
                    "speed": 2
                },
                "layer3": {
                    "image": '../assets/backgrounds/forest3/3.png',
                    "speed": 4
                },
                "layer4":{
                    "image": '../assets/backgrounds/forest3/4.png',
                    "speed": 6
                },
                "layer5":{
                    "image": '../assets/backgrounds/forest3/5.png',
                    "speed": 8
                },
            },
            "forest4": {
                "layer1": {
                    "image": '../assets/backgrounds/forest4/1.png',
                    "speed": 2
                },
                "layer2": {
                    "image": '../assets/backgrounds/forest4/2.png',
                    "speed": 2
                },
                "layer3": {
                    "image": '../assets/backgrounds/forest4/3.png',
                    "speed": 4
                },
                "layer4":{
                    "image": '../assets/backgrounds/forest4/4.png',
                    "speed": 6
                },
                "layer5":{
                    "image": '../assets/backgrounds/forest4/5.png',
                    "speed": 8
                },
            },
            "forest5": {
                "layer1": {
                    "image": '../assets/backgrounds/forest5/1.png',
                    "speed": 2
                },
                "layer2": {
                    "image": '../assets/backgrounds/forest5/2.png',
                    "speed": 4
                },
                "layer3": {
                    "image": '../assets/backgrounds/forest5/3.png',
                    "speed": 5
                },
                "layer4":{
                    "image": '../assets/backgrounds/forest5/4.png',
                    "speed": 6
                },
                "layer5":{
                    "image": '../assets/backgrounds/forest5/5.png',
                    "speed": 7
                },
                "layer6":{
                    "image": '../assets/backgrounds/forest5/6.png',
                    "speed": 8
                },
                "layer7":{
                    "image": '../assets/backgrounds/forest5/7.png',
                    "speed": 9
                },
                "layer8":{
                    "image": '../assets/backgrounds/forest5/8.png',
                    "speed": 10
                },
            },
            "forest6": {
                "layer1": {
                    "image": '../assets/backgrounds/forest6/2.png',
                    "speed": 4
                },
                "layer2": {
                    "image": '../assets/backgrounds/forest6/3.png',
                    "speed": 5
                },
                "layer3": {
                    "image": '../assets/backgrounds/forest6/4.png',
                    "speed": 5
                },
            },
            "forest7": {
                "layer1": {
                    "image": '../assets/backgrounds/forest7/1.png',
                    "speed": 1
                },
                "layer2": {
                    "image": '../assets/backgrounds/forest7/2.png',
                    "speed": 2
                },
                "layer3": {
                    "image": '../assets/backgrounds/forest7/3.png',
                    "speed": 3
                },
                "layer4":{
                    "image": '../assets/backgrounds/forest7/4.png',
                    "speed": 4
                },
                "layer5":{
                    "image": '../assets/backgrounds/forest7/5.png',
                    "speed": 6
                },
                "layer6":{
                    "image": '../assets/backgrounds/forest7/6.png',
                    "speed": 7
                },
                "layer7":{
                    "image": '../assets/backgrounds/forest7/7.png',
                    "speed": 8
                },
                "layer8":{
                    "image": '../assets/backgrounds/forest7/8.png',
                    "speed": 8.5
                },
                "layer9":{
                    "image": '../assets/backgrounds/forest7/9.png',
                    "speed": 10
                },
            },
            "forest8": {
                "layer1": {
                    "image": '../assets/backgrounds/forest8/7.png',
                    "speed": 1
                },
                "layer2": {
                    "image": '../assets/backgrounds/forest8/6.png',
                    "speed": 2
                },
                "layer3": {
                    "image": '../assets/backgrounds/forest8/5.png',
                    "speed": 3
                },
                "layer4":{
                    "image": '../assets/backgrounds/forest8/4.png',
                    "speed": 4
                },
                "layer5":{
                    "image": '../assets/backgrounds/forest8/3.png',
                    "speed": 5
                },
                "layer6":{
                    "image": '../assets/backgrounds/forest8/2.png',
                    "speed": 6
                },
                "layer7":{
                    "image": '../assets/backgrounds/forest8/1.png',
                    "speed": 7
                },
            },
            "forest9": {
                "layer1": {
                    "image": '../assets/backgrounds/forest9/7.png',
                    "speed": 1
                },
                "layer2": {
                    "image": '../assets/backgrounds/forest9/6.png',
                    "speed": 2
                },
                "layer3": {
                    "image": '../assets/backgrounds/forest9/5.png',
                    "speed": 3
                },
                "layer4":{
                    "image": '../assets/backgrounds/forest9/4.png',
                    "speed": 4
                },
                "layer5":{
                    "image": '../assets/backgrounds/forest9/3.png',
                    "speed": 5
                },
                "layer6":{
                    "image": '../assets/backgrounds/forest9/2.png',
                    "speed": 6
                },
                "layer7":{
                    "image": '../assets/backgrounds/forest9/1.png',
                    "speed": 7
                },
            },
            "forest10": {
                "layer1": {
                    "image": '../assets/backgrounds/forest10/7.png',
                    "speed": 1
                },
                "layer2": {
                    "image": '../assets/backgrounds/forest10/6.png',
                    "speed": 2
                },
                "layer3": {
                    "image": '../assets/backgrounds/forest10/5.png',
                    "speed": 3
                },
                "layer4":{
                    "image": '../assets/backgrounds/forest10/4.png',
                    "speed": 4
                },
                "layer5":{
                    "image": '../assets/backgrounds/forest10/3.png',
                    "speed": 5
                },
                "layer6":{
                    "image": '../assets/backgrounds/forest10/2.png',
                    "speed": 6
                },
                "layer7":{
                    "image": '../assets/backgrounds/forest10/1.png',
                    "speed": 7
                },
            },
            "forest11": {
                "layer1": {
                    "image": '../assets/backgrounds/forest11/1.png',
                    "speed": 1
                },
                "layer2": {
                    "image": '../assets/backgrounds/forest11/2.png',
                    "speed": 2
                },
                "layer3": {
                    "image": '../assets/backgrounds/forest11/3.png',
                    "speed": 3
                },
                "layer4":{
                    "image": '../assets/backgrounds/forest11/4.png',
                    "speed": 4
                },
            },
            "forest12": {
                "layer1": {
                    "image": '../assets/backgrounds/forest12/1.png',
                    "speed": 1
                },
                "layer2": {
                    "image": '../assets/backgrounds/forest12/2.png',
                    "speed": 2
                },
                "layer3": {
                    "image": '../assets/backgrounds/forest12/3.png',
                    "speed": 3
                },
                "layer4":{
                    "image": '../assets/backgrounds/forest12/4.png',
                    "speed": 4
                },
                "layer5":{
                    "image": '../assets/backgrounds/forest12/5.png',
                    "speed": 6
                },
            },
            "dungeon1": {
                "layer1": {
                    "image": '../assets/backgrounds/dungeon1/1.png',
                    "speed": 1
                },
                "layer2": {
                    "image": '../assets/backgrounds/dungeon1/2.png',
                    "speed": 2
                },
                "layer3": {
                    "image": '../assets/backgrounds/dungeon1/3.png',
                    "speed": 3
                },
                "layer4":{
                    "image": '../assets/backgrounds/dungeon1/4.png',
                    "speed": 4
                },
                "layer5":{
                    "image": '../assets/backgrounds/dungeon1/5.png',
                    "speed": 6
                },
            },
            "dungeon2": {
                "layer1": {
                    "image": '../assets/backgrounds/dungeon2/1.png',
                    "speed": 1
                },
                "layer2": {
                    "image": '../assets/backgrounds/dungeon2/2.png',
                    "speed": 2
                },
                "layer3": {
                    "image": '../assets/backgrounds/dungeon2/3.png',
                    "speed": 3
                },
                "layer4":{
                    "image": '../assets/backgrounds/dungeon2/4.png',
                    "speed": 4
                },
                "layer5":{
                    "image": '../assets/backgrounds/dungeon2/5.png',
                    "speed": 6
                },
            },
            "hills": {
                "layer1": {
                    "image": '../assets/backgrounds/hills/1.png',
                    "speed": 1
                },
                "layer2": {
                    "image": '../assets/backgrounds/hills/2.png',
                    "speed": 2
                },
                "layer3": {
                    "image": '../assets/backgrounds/hills/3.png',
                    "speed": 3
                },
                "layer4":{
                    "image": '../assets/backgrounds/hills/4.png',
                    "speed": 4
                },
                "layer5":{
                    "image": '../assets/backgrounds/hills/5.png',
                    "speed": 6
                },
                "layer6":{
                    "image": '../assets/backgrounds/hills/6.png',
                    "speed": 8
                },
            },
            "city2": {
                "layer1": {
                    "image": '../assets/backgrounds/city2/1.png',
                    "speed": 1
                },
                "layer2": {
                    "image": '../assets/backgrounds/city2/2.png',
                    "speed": 2
                },
                "layer3": {
                    "image": '../assets/backgrounds/city2/3.png',
                    "speed": 3
                },
                "layer4":{
                    "image": '../assets/backgrounds/city2/4.png',
                    "speed": 4
                },
            },
            "beach": {
                "layer1": {
                    "image": '../assets/backgrounds/beach/7.png',
                    "speed": 1
                },
                "layer2": {
                    "image": '../assets/backgrounds/beach/6.png',
                    "speed": 2
                },
                "layer3": {
                    "image": '../assets/backgrounds/beach/5.png',
                    "speed": 3
                },
                "layer4":{
                    "image": '../assets/backgrounds/beach/4.png',
                    "speed": 4
                },
                "layer5":{
                    "image": '../assets/backgrounds/beach/3.png',
                    "speed": 5
                },
                "layer6":{
                    "image": '../assets/backgrounds/beach/2.png',
                    "speed": 6
                },
                "layer7":{
                    "image": '../assets/backgrounds/beach/1.png',
                    "speed": 7
                },
            },
            "beach2": {
                "layer1": {
                    "image": '../assets/backgrounds/beach2/1.png',
                    "speed": 1
                },
                "layer2": {
                    "image": '../assets/backgrounds/beach2/2.png',
                    "speed": 2
                },
                "layer3": {
                    "image": '../assets/backgrounds/beach2/3.png',
                    "speed": 3
                },
                "layer4":{
                    "image": '../assets/backgrounds/beach2/4.png',
                    "speed": 4
                },
                "layer5":{
                    "image": '../assets/backgrounds/beach2/5.png',
                    "speed": 5
                },
                "layer6":{
                    "image": '../assets/backgrounds/beach2/6.png',
                    "speed": 7
                },
            },
            "beach3": {
                "layer1": {
                    "image": '../assets/backgrounds/beach3/1.png',
                    "speed": 1
                },
                "layer2": {
                    "image": '../assets/backgrounds/beach3/2.png',
                    "speed": 2
                },
                "layer3": {
                    "image": '../assets/backgrounds/beach3/3.png',
                    "speed": 3
                },
                "layer4":{
                    "image": '../assets/backgrounds/beach3/5.png',
                    "speed": 5
                },
                "layer5":{
                    "image": '../assets/backgrounds/beach3/4.png',
                    "speed": 4
                },
                "layer6":{
                    "image": '../assets/backgrounds/beach3/6.png',
                    "speed": 5
                },
                "layer7":{
                    "image": '../assets/backgrounds/beach3/7.png',
                    "speed": 6
                },
            },
            "ocean": {
                "layer2": {
                    "image": '../assets/backgrounds/ocean/6.png',
                    "speed": 2
                },
                "layer3": {
                    "image": '../assets/backgrounds/ocean/5.png',
                    "speed": 3
                },
                "layer4":{
                    "image": '../assets/backgrounds/ocean/4.png',
                    "speed": 4
                },
                "layer5":{
                    "image": '../assets/backgrounds/ocean/3.png',
                    "speed": 5
                },
                "layer6":{
                    "image": '../assets/backgrounds/ocean/2.png',
                    "speed": 6
                },
                "layer7":{
                    "image": '../assets/backgrounds/ocean/1.png',
                    "speed": 7
                },
            },
            "castle": {
                "layer1": {
                    "image": '../assets/backgrounds/castle/bg.jpg',
                    "speed": 2
                },
                "layer2": {
                    "image": '../assets/backgrounds/castle/1.png',
                    "speed": 3
                },
                "layer3": {
                    "image": '../assets/backgrounds/castle/2.png',
                    "speed": 5
                },
            },
            "halloween": {
                "layer1": {
                    "image": '../assets/backgrounds/halloween/1.png',
                    "speed": 1
                },
                "layer2": {
                    "image": '../assets/backgrounds/halloween/2.png',
                    "speed": 2
                },
                "layer3": {
                    "image": '../assets/backgrounds/halloween/3.png',
                    "speed": 3
                },
                "layer4":{
                    "image": '../assets/backgrounds/halloween/4.png',
                    "speed": 4
                },
                "layer5":{
                    "image": '../assets/backgrounds/halloween/5.png',
                    "speed": 5
                },
                "layer6":{
                    "image": '../assets/backgrounds/halloween/6.png',
                    "speed": 7
                },
                "layer7":{
                    "image": '../assets/backgrounds/halloween/7.png',
                    "speed": 8
                },
            },
            "halloween2": {
                "layer1": {
                    "image": '../assets/backgrounds/halloween2/1.png',
                    "speed": 1
                },
                "layer2": {
                    "image": '../assets/backgrounds/halloween2/2.png',
                    "speed": 2
                },
                "layer3": {
                    "image": '../assets/backgrounds/halloween2/3.png',
                    "speed": 3
                },
                "layer4":{
                    "image": '../assets/backgrounds/halloween2/4.png',
                    "speed": 4
                },
                "layer5":{
                    "image": '../assets/backgrounds/halloween2/5.png',
                    "speed": 5
                },
                "layer6":{
                    "image": '../assets/backgrounds/halloween2/6.png',
                    "speed": 7
                },
            },
            "halloween3": {
                "layer1": {
                    "image": '../assets/backgrounds/halloween3/1.png',
                    "speed": 1
                },
                "layer2": {
                    "image": '../assets/backgrounds/halloween3/2.png',
                    "speed": 2
                },
                "layer3": {
                    "image": '../assets/backgrounds/halloween3/3.png',
                    "speed": 3
                },
                "layer4":{
                    "image": '../assets/backgrounds/halloween3/4.png',
                    "speed": 4
                },
                "layer5":{
                    "image": '../assets/backgrounds/halloween3/5.png',
                    "speed": 5
                },
                "layer6":{
                    "image": '../assets/backgrounds/halloween3/6.png',
                    "speed": 7
                },
                "layer7":{
                    "image": '../assets/backgrounds/halloween3/7.png',
                    "speed": 8
                },
                "layer8":{
                    "image": '../assets/backgrounds/halloween3/8.png',
                    "speed": 8
                },
                "layer9":{
                    "image": '../assets/backgrounds/halloween3/9.png',
                    "speed": 9
                },
            },
            "halloween4": {
                "layer1": {
                    "image": '../assets/backgrounds/halloween4/1.png',
                    "speed": 1
                },
                "layer2": {
                    "image": '../assets/backgrounds/halloween4/2.png',
                    "speed": 2
                },
                "layer3": {
                    "image": '../assets/backgrounds/halloween4/3.png',
                    "speed": 2
                },
                "layer4":{
                    "image": '../assets/backgrounds/halloween4/4.png',
                    "speed": 4
                },
                "layer5":{
                    "image": '../assets/backgrounds/halloween4/5.png',
                    "speed": 5
                },
                "layer6":{
                    "image": '../assets/backgrounds/halloween4/6.png',
                    "speed": 6
                },
                "layer7":{
                    "image": '../assets/backgrounds/halloween4/7.png',
                    "speed": 8
                },
            },
            "city": {
                "layer1": {
                    "image": '../assets/backgrounds/city/1.png',
                    "speed": 1
                },
                "layer2": {
                    "image": '../assets/backgrounds/city/2.png',
                    "speed": 2
                },
                "layer3": {
                    "image": '../assets/backgrounds/city/3.png',
                    "speed": 3
                },
                "layer4":{
                    "image": '../assets/backgrounds/city/4.png',
                    "speed": 4
                },
                "layer5":{
                    "image": '../assets/backgrounds/city/5.png',
                    "speed": 5
                },
                "layer6":{
                    "image": '../assets/backgrounds/city/6.png',
                    "speed": 7
                },
                "layer7":{
                    "image": '../assets/backgrounds/city/7.png',
                    "speed": 8
                },
                "layer8":{
                    "image": '../assets/backgrounds/city/8.png',
                    "speed": 8
                },
            },
            
        },
        
    },
    "stages": {
        "stage1": {
            "name": "Magic Forest",
            "levels": {
                "level1": {
                    "name": "Magic Forest 1-1",
                    "background": "forest1",
                    "enemys": [
                        {
                          "enemy": "bat",
                          "speed": 10
                        },
                        {
                          "enemy": "bat2",
                          "speed": 10
                        },
                        {
                          "enemy": "bat3",
                          "speed": 10
                        },
                        {
                          "enemy": "mummy",
                          "speed": 10
                        },
                        {
                          "enemy": "orc",
                          "speed": 10
                        },
                        {
                          "enemy": "flyingDroplet",
                          "speed": 10
                        },
                        {
                          "enemy": "jack2",
                          "speed": 10
                        },
                        {
                          "enemy": "zumbi",
                          "speed": 10
                        },
                        {
                          "enemy": "zumboa",
                          "speed": 10
                        },
                        {
                          "enemy": "troll",
                          "speed": 10
                        },
                        {
                          "enemy": "troll2",
                          "speed": 10
                        },
                        {
                          "enemy": "ghost",
                          "speed": 10
                        },
                        {
                          "enemy": "droplet",
                          "speed": 10
                        },
                    
                        {
                          "enemy": "skeleton",
                          "speed": 15
                        },
                        {
                          "enemy": "golem",
                          "speed": 10
                        },
                      ],
                }
            }
        },
    },
}
