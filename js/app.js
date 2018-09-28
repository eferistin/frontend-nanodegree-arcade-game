// Enemies our player must avoid
var Enemy = function(x,y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.x = x;
    this.y = y;
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


var Player = function(x, y, sprite="images/char-pink-girl.png") {
    this.x = x;
    this.y = y;
    this.sprite = sprite;
};

Player.prototype.update=function(dt){

};

// Draw the enemy on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies= []; //=Enemy();
var player = new Player(175, 410);//Player();

//create random start position for bugs.
var bugStartPos1 =Math.random()*100;
var bugStartPos2 =Math.random()*200 +45;
var bugStartPos3 =Math.random()*250 + bugStartPos2;

// to test- determine of bug if was off canvas
console.log("I am bug 1 "+bugStartPos1);
console.log("I am bug 2 "+bugStartPos2);
console.log("I am bug 3 "+bugStartPos3);

var bug1 = new Enemy(0,bugStartPos1);
var bug2 = new Enemy(0,bugStartPos2);
var bug3 = new Enemy(0,bugStartPos3);

allEnemies.push(bug1,bug2,bug3);

//create function for player to move
Player.prototype.handleInput= function(arrowKeyDirections){
    switch(arrowKeyDirections){
        case "left":
            this.x -=55;
            break;
        case "up":
            this.y -=65;
            break;
        case "right":
            this.x +=55;
            break;
        case "down":
            this.y +=65;
            break;
    }
};

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
