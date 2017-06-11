class Idle implements Behavior, Observer {
    public pika: Pika;
    public controls: Controls;
    private first: boolean = true;
    
    constructor(p: Pika, c:Controls) {
        c.subscribe(this);
        this.pika = p; 
        console.log(this.pika.state)
        
        this.controls = c;       
        this.pika.div.addEventListener("click", () => this.onPet());
    }

    performBehavior(): void {
        if (this.first == true) {
            this.pika.div.style.backgroundImage = "url('images/" + this.pika.state + "/idle.gif')";
            var sound = new Howl({
                src: ['sounds/'+ this.pika.state +'.wav'],
                volume: 0.2
            });
            sound.play();
            this.first = false;
        }
        this.pika.sleep += 0.002;
    }

    notify(b: Number): void {
        switch (b) {
            case 87:   
            case 65:
            case 68:
            case 83:
                console.log("arrows");
                break;   
            case 74:
                this.onTraining();
                break;
            case 75:
                this.onSleeping();
                break;
            default:
                break;
        }
    }

    onPet() : void {
        this.pika.happiness += 1;
    }
    onSleeping() : void {
        this.pika.behavior = new Sleeping(this.pika, this.controls);
        this.controls.unsubscribe(this);
    }
    onTraining() : void {
        if(this.pika.sleep > 69) {
            this.pika.happiness -= 20;
        }
        this.pika.behavior = new Training(this.pika, this.controls);
        this.controls.unsubscribe(this);
    }
    
}