// Preloader will load all of the assets like graphics and audio
GameStates.Preloader = function (game) {
    this.preloadBar = null;
}

GameStates.Preloader.prototype = {
    preload: function () {
        // common to add a loading bar sprite here...
        //this.preloadBar = this.add.sprite(this.game.width / 2 - 100, this.game.height / 2, 'preloaderBar');
        //this.load.setPreloadSprite(this.preloadBar);
        // load all game assets
        // images, spritesheets, atlases, audio etc..
        this.load.image('logo', 'assets/phaser2.png');
        this.load.tilemap('myTilemap', 'assets/tilemaps/uruMap.json', null, Phaser.Tilemap.TILED_JSON);
        this.load.image('myTileset', "assets/tilemaps/tilesetOpenGame.png");
        this.load.image('bg', 'assets/tiledbackground.png');
        this.load.spritesheet('player', 'assets/spritesheets/Unicorn_Run48.png', 60, 48)
    },

    create: function () {  
        //call next state
        this.state.start('Game');
    }
};