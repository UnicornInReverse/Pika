/// <reference path="pika.ts"/>

class Game {

    private pika : Pika;
    private controls: Controls;

    constructor() {
        let container = document.getElementById("container");
        this.pika = new Pika(container);
        this.controls = new Controls();
        requestAnimationFrame(() => this.gameLoop());
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
} 


// load
window.addEventListener("load", function() {
    let g:Game = new Game();
});