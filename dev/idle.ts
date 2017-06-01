class Idle implements Behavior {
    public pika: Pika;
    
    constructor(j: Pika) {
        this.pika = j;
    }

    performBehavior(): void {
        // this.pika.hygiene -= 0.01;
        // this.pika.food -= 0.02;
        // this.pika.happiness -= 0.015;
        this.pika.div.style.backgroundImage = "url('images/Pichu/idle.gif')";

    }

    onWash(): void {
        this.pika.behavior = new Wash(this.pika);
    }

    onPet(): void {

    }

    onEat(): void {
        
    }
    
}