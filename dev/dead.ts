class Dead implements Behavior {
    pika: Pika;
    
    constructor(p: Pika) {
        this.pika = p;
        this.performBehavior();
    }

    performBehavior(): void {
        this.pika.div.style.backgroundImage = "url('images/dead.png')"
    }

    onWash(): void {

    }

    onPet(): void {

    }

    onEat(): void {
        
    }
    
}