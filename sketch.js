var background_IMG
var sniper_IMG
var sniper
var enemy1
var enemy1_IMG
var enemy2
var enemy2_IMG
var enemy3
var enemy3_IMG
var scoped
var scoped_IMG
function preload(){
background_IMG = loadImage("background.jpg")
sniper_IMG = loadImage("sniper.png")
enemy1_IMG = loadImage("enemy1.png")
enemy2_IMG = loadImage("enemy2.png")
enemy3_IMG = loadImage("enemy3.png")
scoped_IMG = loadImage("scoped.png")
}

function setup(){
canvas = createCanvas(1920,937)
sniper = createSprite(1000, 790, 700, 350)
sniper.addImage("sniper", sniper_IMG)
sniper.addImage("scoped", scoped_IMG)
enemy1 = createSprite(575, 600, 50, 50)
enemy1.addImage("enemy1", enemy1_IMG)
enemy1.scale = 0.1
enemy2 = createSprite(1500, 550, 100, 100)
enemy2.addImage("enemy2", enemy2_IMG)
enemy2.scale = 0.25
enemy3 = createSprite(1025,312,50,50)
enemy3.addImage("enemy3", enemy3_IMG)
enemy3.scale = 0.25
}
function draw(){
background(background_IMG)
if(keyWentDown("q")){
sniper.changeImage("scoped")
sniper.y = 535
sniper.scale = 1.35

}
if(keyWentUp("q")){
sniper.changeImage("sniper")
sniper.y = 790
sniper.scale = 1
}
drawSprites()
}