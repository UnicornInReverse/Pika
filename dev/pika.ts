/// <reference path="pokepet.ts" />

class Pika extends Pokepet{
          
    constructor(parent:HTMLElement, c:Controls) {
        super();
        this.div = document.createElement("pika");
        this.states = new Array("Pichu", "Pikachu", "Raichu");
        parent.appendChild(this.div);

        // start instellingen
        this.xp = 5;
        this.sleep = 0;
        this.happiness = 30;

        this.behavior = new Idle(this, c);
    }
}
