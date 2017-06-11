class Fled implements Behavior, Observer {
    pika: Pika;
    controls: Controls;

    constructor(p: Pika) {
        this.pika = p;
        Game.getInstance().gameOver(false);
        // Controls.subscribe(this);
        this.performBehavior();
    }

    notify():void {
        console.log("Fuck this shit I'm out")
    }

    performBehavior(): void {
        this.pika.div.style.backgroundImage = "none";
    }

    onPet() : void {

    }
    onSleeping() : void {

    }
    onTraining() : void {
        
    }
    
}