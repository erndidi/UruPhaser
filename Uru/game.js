GameStates.Game = function (game) {

};

var map;
var backgroundLayer;
var blockLayer;
var bg;
var player;
var jumpTimer = 0;
var cursors;
var jumpButton;


GameStates.Game.prototype = {

    create: function () {
        //below code creates a simple tween animation. You will want to delete this when adding your code
        //var logo = this.add.sprite(this.world.centerX, this.world.centerY, 'logo');
        //logo.anchor.setTo(0.5, 0.5);
        //logo.scale.setTo(0.2, 0.2);
        //this.add.tween(logo.scale).to({ x: 1, y: 1 }, 2000, Phaser.Easing.Bounce.Out, true);

        map = this.add.tilemap('myTilemap');
        map.addTilesetImage('tilesetOpenGame', 'myTileset');

       // backgroundLayer = map.createLayer('background');
        bg = this.add.tileSprite(0, 0, 640, 640, 'bg');
        blockLayer = map.createLayer('blocklayer');
        this.physics.arcade.gravity.y = 300;
        this.setupPlayer();
        cursors = this.input.keyboard.createCursorKeys();
        jumpButton = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);       
        map.setCollision(44, true, 'blocklayer');
    },

    setupPlayer: function ()
    {
        player = this.add.sprite(50, 32, 'player'); //50 x 32 = starting position
        this.physics.enable(player, Phaser.Physics.ARCADE);
        player.scale.setTo(1.1, 1.1);
        player.body.collideWorldBounds = true;
        player.body.setSize(20, 32, 0, 0);
        player.anchor.setTo(.5, 1); //so it flips around its middle
        player.animations.add('move', [5, 6, 7, 8], 10, true);
    },

    update: function () {
        player.body.velocity.x = 0; //default speed - stationary
        game.physics.arcade.collide(player, blockLayer);
        if (cursors.left.isDown) {
            player.scale.x = -1;
            player.body.velocity.x = -150;
            player.animations.play('move');
        }
        else if (cursors.right.isDown) {
            player.scale.x = 1;
            player.body.velocity.x = 150;
            player.animations.play('move');
        }
        else {
            player.animations.stop();
            player.frame = 5;
        }
        if (jumpButton.isDown && player.body.onFloor() && this.time.now > jumpTimer) {
            player.body.velocity.y = -250;
            jumpTimer = game.time.now + 750;
        }
    },
   
    render: function () { },
};
