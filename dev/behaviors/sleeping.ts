class Sleeping implements Behavior, Observer {
    pika: Pika;
    controls: Controls;
    
    constructor(p: Pika, c: Controls) {
        this.pika = p;
        this.controls = c;
        this.controls.subscribe(this);
    }

    notify(b: Number): void {
        if(b == 75) {
            this.onSleeping();
        }
    }

    performBehavior(): void {
        this.pika.div.style.backgroundImage = "url('images/" + this.pika.state + "/sleeping.gif')"
        this.pika.sleep -= 0.02;
    }

    onPet() : void {

    }
    onSleeping() : void {
        this.pika.behavior = new Idle(this.pika, this.controls);
        this.controls.unsubscribe(this);
    }
    onTraining() : void {
        
    }
    
}