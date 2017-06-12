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
        if(w) {
            this.pika.div.style.transform = "translate(219px, 118px)"
            this.pika.div.style.backgroundImage = "url('images/you-won.png')";
        } else {
            this.pika.div.style.transform = "translate(215px, 140px)";        
            this.pika.div.style.backgroundImage = "url('images/game-over.gif')";
        }

        window.addEventListener("keydown", function(e:KeyboardEvent){
            if(e.keyCode == 75) {
                location.reload();
            }
        })
    }
} 

// load
window.addEventListener("load", function() {
    let g:Game = Game.getInstance();
});