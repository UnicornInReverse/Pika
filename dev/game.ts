/// <reference path="pika.ts"/>

class Game {

    private pika : Pika;
    private controls: Controls;
    private static instance: Game;

    private constructor() {
        let container = document.getElementById("container");
        this.pika = new Pika(container);
        this.controls = new Controls();
        requestAnimationFrame(() => this.gameLoop());
    }

    public static getInstance():Game {
        if(!Game.instance) {
            Game.instance = new Game();
        }
        return Game.instance;
    }

    private gameLoop(){
        this.pika.update();
        this.updateUI();
        requestAnimationFrame(() => this.gameLoop());
    }

    private updateUI():void{
        document.getElementsByTagName("xp")[0].innerHTML = Math.round(this.pika.food).toString() + "xp";
        document.getElementsByTagName("sleep")[0].innerHTML = Math.round(this.pika.hygiene).toString() + "Zzz";
        document.getElementsByTagName("happiness")[0].innerHTML = Math.round(this.pika.happiness).toString() + ":)";
    }

    public gameOver():void {
        console.log("Game over");
    }
} 


// load
window.addEventListener("load", function() {
    let g:Game = Game.getInstance();
});