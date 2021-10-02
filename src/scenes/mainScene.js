class MainScene extends Phaser.Scene {
    constructor() {
        super('MainScene');
    }

    preload() {
        this.load.image('claw', 'assets/claw.png');
        this.load.image('box', 'assets/box.png');
        this.load.image('ground', 'assets/ground.png');
    }

    create() {
        let grounds = this.physics.add.staticGroup();
        for (const x of Array(51).keys()) {
            grounds.create(800 - (16 * x), 584, 'ground').setOrigin(0, 0);
          }
    }
}

export default MainScene;