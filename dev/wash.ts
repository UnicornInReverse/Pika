class Wash implements Behavior {
    pika: Pika;
    
    constructor(p: Pika) {
        this.pika = p;
    }s

    performBehavior(): void {
        this.pika.div.style.backgroundImage = "url('images/washing.png')"
    }

    onWash(): void {

    }

    onPet(): void {

    }

    onEat(): void {
        this.pika.div.style.backgroundImage = "url('images/angry.png')"        
    }
    
}