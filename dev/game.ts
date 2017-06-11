/// <reference path="pika.ts"/>
/// <reference path="controls.ts"/>

class Game {

    private pika : Pika;
    private controls: Controls;
    private static instance: Game;

    private constructor() {
        let container = document.getElementById("container");
        this.controls = new Controls();
        this.pika = new Pika(container, this.controls);        
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
        document.getElementsByTagName("xp")[0].innerHTML = Math.round(this.pika.xp).toString() + "xp";
        document.getElementsByTagName("sleep")[0].innerHTML = Math.round(this.pika.sleep).toString() + "Zzz";
        document.getElementsByTagName("happiness")[0].innerHTML = Math.round(this.pika.happiness).toString() + ":)";
    }

    public gameOver(w: boolean):void {
        if(w == true) {
            console.log('You win!')
        } else {
        console.log("Game over");
        }
    }
} 

// load
window.addEventListener("load", function() {
    let g:Game = Game.getInstance();
});