class Eat implements Behavior {
    pika: Pika;
    
    constructor(p: Pika) {
        this.pika = p;
    }

    performBehavior(): void {
        this.pika.div.style.backgroundImage = "url('images/dead.png')"
    }

    onWash(): void {

    }

    onEat(): void {

    }

    onPet(): void {
        
    }
    
}