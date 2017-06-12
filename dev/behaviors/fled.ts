class Fled implements Behavior, Observer {
    pika: Pika;
    controls: Controls;

    constructor(p: Pika, c: Controls) {
        this.pika = p;
        this.controls = c;
        this.controls.subscribe(this);
        Game.getInstance().gameOver(false);
        this.performBehavior();
    }

    notify():void {
        console.log("Fuck this shit I'm out")
    }

    performBehavior(): void {
    }

    onPet() : void {

    }
    onSleeping() : void {

    }
    onTraining() : void {
        
    }
    
}