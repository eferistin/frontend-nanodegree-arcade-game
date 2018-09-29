//seting players boundaries
var myleft=true;
var myright= true;
var myRise= true;
var myFall= true;

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
    var differHeight;
    var mySpeed;
    var xFactor;
    var speedChange =[40,-45,110];
    if (this.x>490){// if enemies goes off screen reset position for an infinite loop 

        differHeight= 100*Math.random();// Wiill cause bug to reenter screen at random points of time after it first disappear on the right.
        this.x =-80;
        this.y= Math.random()*100+ differHeight*1.2;//change the location the bug reaapears
        // console.log(this);//testing

    }else
    {
        for(var i=0; i<speedChange.length; i++){
            if(i===3){
                i=i%3;
            }
            xFactor=speedChange[i];
        }
        mySpeed= Math.random()*100 +xFactor;
        this.x +=mySpeed*dt;// makes bug walk
    }
    

    // Check for collision
    checkCollisions= function(){
        for(var enemy in allEnemies){
            if(enemy.y >=player.y -40|| enemy.y<=player.y-25){

                if(enemy.x<=player.x-70 ||enemy.x>=player.x-70){
                    player(175, 410);
                 }
            }

        }

//  return"";
    };
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
var allEnemies= []; 
var player = new Player(175, 410);

//create random start position for bugs.
var bugStartPos1 =Math.random()*100;
var bugStartPos2 =Math.random()*200 +45;
var bugStartPos3 =Math.random()*250 + bugStartPos2;

// to test- determine of bug if was off canvas
console.log("I am bug 1 "+bugStartPos1);
console.log("I am bug 2 "+bugStartPos2);
console.log("I am bug 3 "+bugStartPos3);

//Helps bug initially come on screen at different times
var bug1 = new Enemy(0,bugStartPos1);
var bug2 = new Enemy(-40,bugStartPos2);
var bug3 = new Enemy(-55,bugStartPos3);

allEnemies.push(bug1,bug2,bug3);

//create function for player to move
Player.prototype.handleInput= function(arrowKeyDirections){
    switch(arrowKeyDirections){
        case "left":
            amIinbound();           
            if(myleft===true){
            this.x -=20;
        }
            break;
        case "up":
            amIinbound();            
            if( myRise===true){
            this.y -=35;
        }
            break;
        case "right":
            amIinbound();
            if(myright===true){
            this.x +=20;
        }
            break;
        case "down":
            amIinbound();            
            if( myFall===true){
            this.y +=35;
        }
            break;
    }
};

// verify if player is within boundaries
Player.prototype.canImove= function (){
  
    if(this.x <0 ){
        myright=true;
        myleft=false;
    }
    
    else if(this.y<20){
        myRise=false;
        myFall=true;
        
        // if(this.y=-10){
        //     alert("You won.");
        // }
    }
    else if(this.x >395 ){
        myright=false;
        myleft=true;
    }
    else if(this.y>375){
        myRise=true;
        myFall=false;
    }
    else{
        myRise=true; 
        myFall=true; 
        myright=true; 
        myleft=true; 
    }
}

var amIinbound = player.canImove.bind(player);

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
