class Pet implements Behavior, Observer {
    pika: Pika;
    controls: Controls;

    constructor(p: Pika) {
        this.pika = p;
        // Controls.subscribe(this);
    }

    notify(): void {
        console.log(":D")
    }

    performBehavior(): void {
        this.pika.div.style.backgroundImage = "url('images/dead.png')"
    }

    onPet() : void{

    }
    onSleeping() : void{

    }
    onTraining() : void {
        
    }
    
}