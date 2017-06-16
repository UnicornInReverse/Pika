class Idle implements Behavior, Observer {
    public pika: Pika;
    public controls: Controls;
    private first: boolean = true;
    
    constructor(p: Pika, c:Controls) {
        c.subscribe(this);
        this.pika = p; 
        
        this.controls = c;       
        this.pika.div.addEventListener("click", () => this.onPet());
    }

    performBehavior(): void {
        if (this.first) {
            this.pika.div.style.backgroundImage = "url('images/" + this.pika.cur_state + "/idle.gif')";
            let sound = SoundBuilder.SoundBuilder.getSound(this.pika.cur_state);
            this.first = false;
        }
        this.pika.sleep += 0.002;

        if(this.pika.xp < 1 || this.pika.happiness < 25) {
            this.pika.behavior = new Fled(this.pika, this.controls);
            this.controls.unsubscribe(this);
        } else if (this.pika.xp > 99) {
            this.controls.unsubscribe(this);            
            Game.getInstance().gameOver(true);
        }
    }

    notify(b: Number): void {
        switch (b) {
            case Keys.RIGHT:
                console.log("arrows");
                break;   
            case Keys.B:
                this.onTraining();
                break;
            case Keys.A:
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
            this.pika.happiness -= 10;
        }
        this.pika.behavior = new Training(this.pika, this.controls);
        this.controls.unsubscribe(this);
    }
    
}