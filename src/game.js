import style from "./css/main.css";
import Phaser from "phaser"

import MainScene from "./scenes/mainScene";

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: "#0c1e3e",
    pixelArt: true,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        },
    },
    scene: [MainScene]
    // scene: [MenuScene, MainScene, HudScene, GameoverScene]
};

var game = new Phaser.Game(config);